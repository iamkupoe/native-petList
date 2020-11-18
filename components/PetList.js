import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function petList({name, type, age, location, photo}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={photo}/>

            <View style={styles.profileDetails}>
              <Text style={styles.petName}>{name}</Text>
              <Text style={styles.details}>{type}</Text>
              <Text style={styles.details}>{age}</Text>

              <View style={styles.location, styles.details}>
                <EvilIcons name="location" size={24} color="#adadad"/>
                <Text style={styles.locationText} numberOfLines={1}> {location} </Text>
              </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
     flexDirection:"row",
     alignItems:"center",
     marginBottom:30,
     height:200,
     marginLeft:0

   },
   image:{
     width:150,
     height:200,
     borderRadius:20,
   
   },
   petName: {
    color: "#4e15ab",
    fontSize: 20,
    fontWeight: "bold",
    
  },

  profileDetails: {
    justifyContent: "center",
    backgroundColor: "white",
    height: 170,
    width: 180,
    paddingBottom: 5,
    paddingLeft: 15,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  
    
  },

  details: {
    color: "#adadad",
    fontSize: 15,
    flexDirection:"row",
  },

  location: {
    flexDirection: "row",
    paddingTop: 5,
    color: "#adadad",
    fontSize: 15,
    width: 50,
    margin:0,
    padding:0,
    
  },

  locationText: {
    color: "#adadad",
    fontSize: 15,
    paddingLeft:0
  },

});