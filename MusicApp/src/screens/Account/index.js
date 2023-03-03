import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { List } from "../../components";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const actionData = [
    {
        id: 0,
        name: "My SoundCloud",
        type: "Free User"
    },
    {
        id: 1,
        name: "Music quality",
        type: null
    },
    {
        id: 2,
        name: "Help",
        type: null
    }
]

const playlistData = [
    {
        id: 0,
        img: Images.playlist1,
        title: "Summer Vibes",
        follow: "1.300.231 FOLLOWERS"
    },
    {
        id: 1,
        img: Images.playlist2,
        title: "Rap Zone ",
        follow: "650.231 FOLLOWERS"
    },
    {
        id: 2,
        img: Images.playlist3,
        title: "Music Mix",
        follow: "50.231 FOLLOWERS"
    },
]

export default function Account() {

    const [showAdv, setShowAdv] = useState(true)

    const renderPlaylistItem = (item) => {
        return (
            <TouchableOpacity>
                <Image source={item.img} style={styles.hot_img} />
                <Text style={styles.hot_title}>{item.title}</Text>
                <Text style={styles.hot_follow}>{item.follow}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={styles.container}>
            {showAdv && <ImageBackground source={Images.adv_bg} style={styles.bg}>
                <TouchableOpacity style={styles.close_container} onPress={() => setShowAdv(false)}>
                    {Icons.Icons({ name: 'close_white', height: 9, width: 9 })}
                </TouchableOpacity>
                <Text style={styles.adv_title}>SoundCloud Premium</Text>
                <Text style={styles.adv_content}>Remove boring advs, create infinite playlists and so much more…</Text>
            </ImageBackground>}
            <View style={styles.info_container}>
                <View style={styles.info}>
                    <Text style={styles.name}>Kimberly Evans</Text>
                    <TouchableOpacity>
                        <Text style={styles.edit}>Edit profile</Text>
                    </TouchableOpacity>
                </View>
                <Image source={Images.avatar} style={styles.avatar} />
            </View>
            <View style={styles.action_container}>
                {actionData.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity style={styles.action_item}>
                                <Text style={styles.action_name}>{item.name}</Text>
                                {item.type ?
                                    <View style={styles.free_user}>
                                        <Text style={styles.text_free_user}>{item.type}</Text>
                                    </View>
                                    :
                                    Icons.Icons({ name: "next", height: 8, width: 8 })}
                            </TouchableOpacity>
                            {index !== actionData.length - 1 && <View style={styles.line} />}
                        </View>

                    )
                })}
            </View>
            <List
                data={playlistData}
                title="My playlists"
                titleStyle={[styles.name, { marginTop: 20 }]}
                renderItem={(item) => renderPlaylistItem(item)}
            />
        </ScrollView>
    )
}