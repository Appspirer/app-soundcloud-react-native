import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { List } from "../../components";
import Icons from "../../themes/Icons";
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
        img: Images.playlist7,
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

const actionData = [
    {
        id: 0,
        name: "Ranking",
        icon: Icons.Icons({ name: "ranking", height: 11, width: 20 }),
        new: 1
    },
    {
        id: 0,
        name: "Weekly featured",
        icon: Icons.Icons({ name: "featured", height: 16, width: 13 }),
        new: 0
    },
    {
        id: 0,
        name: "Podcast",
        icon: Icons.Icons({ name: "podcast", height: 18, width: 18 }),
        new: 0
    },
    {
        id: 0,
        name: "Live",
        icon: Icons.Icons({ name: "live", height: 21, width: 13 }),
        new: 0
    },
    {
        id: 0,
        name: "Concerts",
        icon: Icons.Icons({ name: "concerts", height: 14, width: 20 }),
        new: 0
    },
]

export default function Music() {

    const renderHotItem = (item) => {
        return (
            <TouchableOpacity>
                <Image source={item.img} style={styles.hot_img} />
                <Text style={styles.hot_title}>{item.title}</Text>
                <Text style={styles.hot_follow}>{item.follow}</Text>
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
            <Text style={styles.recents}>Recents</Text>
            <View style={styles.list}>
                {actionData.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity style={styles.action_item}>
                                <View style={styles.action_left}>
                                    <View style={styles.action_icon}>
                                        {item.icon}
                                    </View>
                                    <Text style={styles.action_title}>{item.name}</Text>
                                </View>
                                <View style={styles.action_right}>
                                    {item.new === 1 && <View style={styles.new}>
                                        <Text style={styles.new_text}>News</Text>
                                    </View>}
                                    {Icons.Icons({ name: "next", height: 8, width: 8 })}
                                </View>
                            </TouchableOpacity>
                            {index !== actionData.length - 1 ? <View style={styles.line} /> : <></>}
                        </View>
                    )
                })}
            </View>
            <List
                data={hotData}
                title="Playlists"
                titleStyle={styles.recents}
                renderItem={(item) => renderHotItem(item)}
            />
            <View style={{height:50}}/>
        </ScrollView>
    )
}