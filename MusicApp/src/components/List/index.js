import React from "react";
import { View, Text, ScrollView } from 'react-native'
import styles from "./styles";

export default function List({ title, titleStyle, data = [], renderItem, listStyle }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.list, listStyle]}>
                {data.map((item, index) => {
                    return (
                        <View key={index} style={{ marginRight: index === data.length - 1 ? 32 : 16 }}>
                            {renderItem ? renderItem(item) : <></>}
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}