import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import SpaceCard from '../components/SpaceCard'
import {SpacesData} from "../mock/DummyData"

export default function SpacesScreen({navigation}){

  useEffect(()=>
  navigation.setOptions({
    headerTitle:"Spaces",
    headerLeft: () => (
      <Image
          style={{height:30,width:30,borderRadius:30,marginLeft:15}}
          source={{uri:"https://imgs.search.brave.com/DFk5bIilYkt_5dJO9oUwuhxM0Z4gwk8LoUC3TQjM6Oc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnJl/dHJvemFwLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/Ni9DYXB0YWluLUFt/ZXJpY2EtM18wMjct/QXZlbmdlcnNIUS1U/cmFpbGVyLmpwZz9y/ZXNpemU9MTE3MCw0/ODAmcXVhbGl0eT04/OSZzc2w9MQ"}}
  />),
  headerTitleStyle:{
    color:"white",
    fontWeight:"bold"
  }
})
  ,[])

  const colors= [["rgb(252, 3, 3)"],
                  ["rgb(252, 186, 3)"],
                  ["rgb(3, 252, 190)"],
                  ["rgb(3, 44, 252)"],
                  ["rgb(3, 44, 252)"]]

  return (
    <View style={styles.container}>
      <ScrollView style={styles.subCont}>
        <View style={styles.liveCont}>
          <View style={styles.liveTextCont}>
            <Text style={styles.liveText}>Happening Now</Text>
            <Text style={styles.subText}>Spaces going on right now </Text>
          </View>
          <View style={styles.spacesCont}>
            {SpacesData.map(dat=>
              <SpaceCard 
                key={dat.id}
                title={dat.title} tags={dat.tags} 
                pic1={dat.pic1} pic2={dat.pic2} pic3={dat.pic3}
                hostName={dat.hostName} hostPic={dat.hostPic} 
                listenCount={dat.listenCount} desc={dat.desc}
                color={dat.color} hostColor={dat.hostColor}
              />
              )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    padding:15
  },
  liveText:{
    fontSize:20,
    color:"white",
    fontWeight:"bold"
  },
  subText:{
    marginTop:4,
    fontSize:14,
    color:"gray",
    fontWeight:700
  }
})