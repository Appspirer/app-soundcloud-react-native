import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { List } from "../../components";
import Images from "../../themes/Images";
import styles from "./styles";

const hotData = [
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

const moodData = [
    {
        id: 0,
        img: Images.playlist4,
        title: "Shower Time",
        follow: "1.300.231 FOLLOWERS"
    },
    {
        id: 1,
        img: Images.playlist5,
        title: "Old School",
        follow: "300.231 FOLLOWERS"
    },
    {
        id: 2,
        img: Images.playlist6,
        title: "Music Mix",
        follow: "50.231 FOLLOWERS"
    },
]

const artistData = [
    {
        id: 0,
        img: Images.artist1,
        title: "Ed Sheeran",
    },
    {
        id: 1,
        img: Images.artist2,
        title: "Rita Ora",
    },
    {
        id: 2,
        img: Images.artist3,
        title: "Eminem",
    },
    {
        id: 3,
        img: Images.artist4,
        title: "Dua Lipa",
    },
]

export default function Home({navigation}) {

    const renderHotItem = (item) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
                <Image source={item.img} style={styles.hot_img} />
                <Text style={styles.hot_title}>{item.title}</Text>
                <Text style={styles.hot_follow}>{item.follow}</Text>
            </TouchableOpacity>
        )
    }

    const renderArtist = (item) =>{
        return(
            <TouchableOpacity>
                <Image source={item.img} style={styles.artist_img} />
                <Text style={styles.artist_title}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <List
                data={hotData}
                title="Host now"
                renderItem={(item) => renderHotItem(item)}
            />
            <List
                data={moodData}
                title="Mood"
                titleStyle={styles.title_mood}
                renderItem={(item) => renderHotItem(item)}
            />
            <List
                data={artistData}
                title="Popular artists"
                titleStyle={styles.title_mood}
                renderItem={(item) => renderArtist(item)}
            />
            <View style={{height:50}}/>
        </ScrollView>
    )
}