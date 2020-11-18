import React from 'react';
import {FlatList, View, StyleSheet, TextInput} from 'react-native';
import PetList from './components/PetList';



export default function PetDetails() {
      const pet = [
          {
          name: "Pastel",
          type: "Cat",
          age:"2 years old",
          location:"93 Shoreline Dr",
          photo: require("./assets/pastel.jpg"),
          },

          {
          name: "Raka",
          type: "Dog",
          age:"13 years old",
          location:"93 Shoreline Dr",
          photo: require("./assets/raka.jpg"),
            },

         {
          name: "Jhony",
          type: "Dog",
          age:"2 years old",
          location:"93 Shoreline Dr",
          photo: require("./assets/jhony.jpg"),
                },
      ]
    return (
        <View style={styles.container}>
           <View style={styles.searchArea}>
             <TextInput style={styles.searchBar}placeholder="Search here"/>
           </View>

           <FlatList
              data={pet}
              renderItem={({item})=> <PetList {...item} />}
              keyExtractor={(name, type, age) => name + type + age}
              />
      
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingTop: 45,
      paddingLeft: 30,
      backgroundColor: "#e6ebe6",
    },
  
    searchArea: {
      flexDirection: "row",
     
    },
  
    searchBar: {
      flex: 1,
      fontSize: 18,
      paddingLeft: 10,
      marginVertical: 30,
      width: "95%",
      height: 50,
      backgroundColor: "white",
      borderRadius: 15,
      textAlign:"center"
    },
  });