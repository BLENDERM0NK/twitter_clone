import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function TrendingCard({topic, count, hashtag, }) {
    return (
        <View style={styles.container}>
            <View style={styles.topCont}>
                <View>
                    <Text style={styles.trendText}>{topic}</Text>
                </View>
                <View>
                    <MaterialCommunityIcons
                        name='dots-vertical'
                        color="gray"
                        size={20}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.hashtagText}>
                    # {hashtag}
                </Text>
                <Text style={styles.tweetCountText}>{count} tweets</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    topCont: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    trendText: {
        color: "#807c7c",
        fontWeight: "700",
    },
    hashtagText: {
        color: "white",
        fontWeight: "700",
        marginTop: 3,
        marginBottom: 3,
    },
    tweetCountText: {
        color: "#807c7c"
    }
})

