import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const baseData = [
    {
        id: 0,
        name: "Better Now",
        artist: "Post Malone",
        img: Images.search1
    },
    {
        id: 1,
        name: "Kimberly Evans",
        artist: "Calvin Harris, Dua Lipa",
        img: Images.search2
    },
    {
        id: 2,
        name: "I Like It",
        artist: "Cardi B, Bad Bunny, J Balvin",
        img: Images.search3
    },
    {
        id: 3,
        name: "Girls Like You (feat Cardi B)",
        artist: "Maroon 5, Cardi B",
        img: Images.search4
    },
    {
        id: 4,
        name: "Back To You",
        artist: "Selena Gomez",
        img: Images.search5
    },
    {
        id: 5,
        name: "Lucid Dreams",
        artist: "Juice WRLD",
        img: Images.search6
    },
    {
        id: 6,
        name: "No Tears Left To Cry",
        artist: "Ariana Grande",
        img: Images.search7
    },
    {
        id: 7,
        name: "Nice For What",
        artist: "Drake",
        img: Images.search8
    },
    {
        id: 8,
        name: "Youngblood",
        artist: "Edit profile",
        img: Images.search9
    },
]

export default function Search() {

    const [value, setValue] = useState('')
    const [data, setData] = useState(baseData)

    const onDelete=(id)=>{
        let tempData = data
        tempData=tempData.filter(item=>item.id !== id)
        setData(tempData)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.search}>
                    {Icons.Icons({ name: 'search_gray', height: 14, width: 14 })}
                    <TextInput
                        style={styles.input}
                        placeholder="Search that song!"
                        value={value}
                        onChangeText={setValue}
                    />
                </View>
                {Icons.Icons({ name: 'logo', height: 40, width: 40 })}
            </View>
            <View style={styles.content}>
                <Text style={styles.recents}>Recents</Text>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={styles.item}>
                                <TouchableOpacity style={styles.item_left}>
                                    <Image source={item.img} style={styles.img}/>
                                    <View style={styles.info}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.artist}>{item.artist}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.close} onPress={()=>onDelete(item.id)}>
                                    {Icons.Icons({name:'close', height:9, width:9})}
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}