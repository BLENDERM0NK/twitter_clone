import React, { Component } from 'react'
import { Text, StyleSheet, View, Image} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function SearchProfCard ({id, name, verified, prof}) {
    return (
      <View style={styles.container}>
        <View style={styles.leftCont}>
            <Image
                style={{height:30, width:30, borderRadius:30}}
                source={{uri:prof}}
            />
        </View>
        <View style={styles.rightCont}>
            <View style={styles.topCont}>
                <View style={styles.nameCont}>
                    <Text style={styles.nameText}>{name}</Text>
                    {verified && <MaterialIcons
                        name='verified'
                        color={"white"}
                        size={20}
                    />}
                    <Text style={styles.idText}>@ {id}</Text>
                </View>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        paddingBottom: 5,
        borderBottomColor: "#2A2E30",
        borderBottomWidth: 1,
    },
    rightCont:{
        flex: 1,
        paddingBottom: 5,
        paddingTop: 6,
        marginLeft:5,
        flexDirection: "column",
        justifyContent: "center"
    },
    nameCont:{
        flexDirection: "row"
    },
    topCont:{
        flex: 1
    },
    nameText:{
        color: "#E7E9EA",
        fontWeight: "bold",
        marginRight: 5
    },
    idText:{
        marginLeft: 5,
        color: "gray"
    }
})

