import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground, Animated } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import { EventRegister } from 'react-native-event-listeners'

var { height, width } = Dimensions.get('window')

export default function Details({ navigation }) {

    const [showAdv, setShowAdv] = useState(true)
    const [play, setPlay] = useState(false)
    const playBar = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (play) {
            Animated.timing(playBar, {
                toValue: width - 64,
                duration: 1000 * 3,
                useNativeDriver: false
            }).start()
        }
    }, [play])

    const playFunc = () => {
        if (play) {
            playBar.stopAnimation()
            setPlay(false)
        } else {
            setPlay(true)
        }
    }

    const onBack = () => {
        if (play) {
            EventRegister.emit('Play',true)
            navigation.goBack()
        }else{
            EventRegister.emit('Play',false)
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => onBack()}>
                {Icons.Icons({ name: "back_btn", height: 20, width: 20 })}
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <Image source={Images.bg_details} style={styles.bg} />
                <View style={styles.row}>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "add", height: 20, width: 20 })}
                    </TouchableOpacity>
                    <Text style={styles.name}>All Mine</Text>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "heart", height: 18.23, width: 20.9 })}
                    </TouchableOpacity>
                </View>
                <Text style={styles.artist}>Kanye West</Text>
                <View style={styles.bottom_content}>
                    <View style={styles.line_gray}>
                        <Animated.View style={[styles.line_orange, { width: playBar }]} />
                        <Animated.View style={[styles.dot, { marginLeft: playBar }]} />
                    </View>
                    <View style={styles.duration_container}>
                        <Text style={styles.duration}>01:30</Text>
                        <Text style={styles.duration}>03:00</Text>
                    </View>
                    <View style={styles.action_container}>
                        <TouchableOpacity onPress={() => { playBar.setValue(0), setPlay(false) }}>
                            {Icons.Icons({ name: "loop", height: 16, width: 20 })}
                        </TouchableOpacity>
                        <TouchableOpacity>
                            {Icons.Icons({ name: "back", height: 25, width: 23 })}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => playFunc()}>
                            {Icons.Icons({ name: "play", height: 50, width: 50 })}
                        </TouchableOpacity>
                        <TouchableOpacity>
                            {Icons.Icons({ name: "forward", height: 25, width: 23 })}
                        </TouchableOpacity>
                        <TouchableOpacity>
                            {Icons.Icons({ name: "shuffle", height: 16, width: 15 })}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {showAdv && <View style={styles.adv}>
                <TouchableOpacity style={styles.adv_container} onPress={() => setShowAdv(false)}>
                    {Icons.Icons({ name: "close_white", height: 7, width: 7 })}
                </TouchableOpacity>
                <View style={styles.adv_content}>
                    {Icons.Icons({ name: "instagram", height: 30, width: 30 })}
                    <View style={styles.adv_info}>
                        <Text style={styles.adv_title}>Share the sound!</Text>
                        <Text style={styles.adv_text}>Let your friends know what are you listening! Share this song</Text>
                    </View>
                    <TouchableOpacity>
                        <ImageBackground source={Images.linear_bg} style={styles.linear_bg}>
                            <Text style={styles.text}>Use the app</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    )
}