import React, { useEffect } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import MailCard from '../components/MailCard'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { ChatData, DummyData } from '../mock/DummyData'

export default function MailScreen({navigation}) {
  useEffect(() => (
    navigation.setOptions({
      headerTitle: "Messages",
      headerLeft: () => (
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, marginLeft: 15 }}
          source={{ uri: "https://imgs.search.brave.com/DFk5bIilYkt_5dJO9oUwuhxM0Z4gwk8LoUC3TQjM6Oc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnJl/dHJvemFwLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/Ni9DYXB0YWluLUFt/ZXJpY2EtM18wMjct/QXZlbmdlcnNIUS1U/cmFpbGVyLmpwZz9y/ZXNpemU9MTE3MCw0/ODAmcXVhbGl0eT04/OSZzc2w9MQ" }}
        />
      ),
      headerRight: () => (
        <MaterialIcons name='settings' color={"white"} size={25} marginRight={15} />
      ),
      headerStyle: {
        backgroundColor: "black",
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        color: "white"
      }
    })
  ), [])
  return (
    <View style={styles.container}>
      <ScrollView>
        {ChatData.map(chatData => 
          <MailCard 
            prof={chatData.prof} 
            key={chatData.id}
            msg={chatData.msg}
            id={chatData.id}
            image={chatData.image}
            name={chatData.name}
            verified={chatData.verified}
            time={chatData.time}
          />
        )

        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
})

