import React, {useEffect} from 'react'
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import TweetCard from '../components/TweetCard';
import {DummyData} from '../mock/DummyData';

export default function HomeScreen({navigation}) {
    useEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center",
            headerLeft: () => (
                <Image
                    style={{height:30, width:30, borderRadius:30, marginLeft:15}}
                    source={{uri:"https://imgs.search.brave.com/DFk5bIilYkt_5dJO9oUwuhxM0Z4gwk8LoUC3TQjM6Oc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnJl/dHJvemFwLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/Ni9DYXB0YWluLUFt/ZXJpY2EtM18wMjct/QXZlbmdlcnNIUS1U/cmFpbGVyLmpwZz9y/ZXNpemU9MTE3MCw0/ODAmcXVhbGl0eT04/OSZzc2w9MQ"}}
                />
            ),
            headerTitle: () => (
                <FontAwesome5 name='twitter' size={25} color={'#00acee'}/>
            )
        })
    })
    return (
      <View style={styles.container}>
        <ScrollView>
            {DummyData.map(userData => 
                <TweetCard
                    key={userData.id}
                    prof={userData.prof}
                    id={userData.id}
                    name={userData.name}
                    verified={userData.verified}
                    image={userData.image}
                    reply={userData.reply}
                    time={userData.time}
                    like={userData.like}
                    rt={userData.rt}
                    tweet={userData.tweet}
                />
            )}
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black"
    }
})


