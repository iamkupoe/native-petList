import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PetDetails from './PetDetails';
import PetList from './components/PetList'

export default function App() {
  return (
    <View style={styles.container}>
    {/* <PetList/>*/}
    <PetDetails/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
