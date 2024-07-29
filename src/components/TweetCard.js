import React, { useState } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from 'react-native';

export default function TweetCard({ id, name, verified, tweet, image, prof, time, like, rt, reply }) {
  const [isPressed, setIsPressed] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [retweetCount, setRetweetCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);

  const handlePress = () => {
    setIsPressed(!isPressed)
    setLikesCount(likesCount + 1)
  }

  const handleReply = () => {
    setCommentCount(commentCount + 1)
  }

  const handleRetweet = () => {
    setRetweetCount(retweetCount + 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <Image
          style={{ height: 40, width: 40, borderRadius: 30, margin: 8 }}
          source={{ uri: prof }}
        />
      </View>
      <View style={styles.rightCont}>
        <View style={styles.topCont}>
          <View style={styles.nameCont}>
            <Text style={styles.nameText}>{name}</Text>
            {verified && <MaterialIcons name='verified' color="white" size={20} />}
            <Text style={styles.idText}>@{id}</Text>
            <Text style={styles.idText}>. {time}</Text>
            <View style={styles.dots}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                color='gray'
                size={20}
              />
            </View>
          </View>
        </View>
        <View style={styles.tweetCont}>
          <Text style={styles.tweetText}>
            {tweet}
          </Text>
          {image && <Image
            style={{ height: 300, width: "100%", borderRadius: 10, marginTop: 10, }}
            source={{ uri: image }}
          />}
        </View>
        <View style={styles.actionCont}>
          <View style={styles.iconCont}>
            <TouchableOpacity style={styles.iconWithCount} onPress={handleReply}>
              <MaterialCommunityIcons
                name='message-reply-outline'
                color='gray'
                size={20}
              />
              <Text style={styles.countingText}>{commentCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconCont}>
            <TouchableOpacity style={styles.iconWithCount} onPress={handleRetweet}>
              <AntDesign
                name='retweet'
                color='gray'
                size={20}
              />
              <Text style={styles.countingText}>{retweetCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconCont}>
            <TouchableOpacity onPress={handlePress} style={styles.iconWithCount}>
              <MaterialCommunityIcons
                name={isPressed ? 'heart' : 'heart-outline'}
                color={isPressed ? 'red' : 'gray'}
                size={20}
              />
              <Text style={styles.countingText}>{likesCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconCont}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name='share-variant-outline'
                color='gray'
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 5,
    borderBottomColor: "#2A2E30",
    borderBottomWidth: 1,
  },
  rightCont: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 5,
    marginLeft: 5,
    flexDirection: "column",
  },
  nameCont: {
    flexDirection: "row",
  },
  actionCont: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15
  },
  iconCont: {
    flexDirection: "row",
    alignItems: 'center',
  },
  iconWithCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topCont: {
    flex: 1,
  },
  text: {
    color: "white",
  },
  nameText: {
    color: "#E7E9EA",
    fontWeight: "bold",
    marginRight: 5,
  },
  idText: {
    marginLeft: 5,
    color: "gray",
  },
  tweetText: {
    color: "#DDDFDF",
  },
  tweetCont: {
    paddingRight: 15,
  },
  countingText: {
    color: "gray",
    marginLeft: 5,
  },
  dots:{
    marginLeft: 100,
  }
});
