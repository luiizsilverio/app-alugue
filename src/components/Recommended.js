import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

export function Recommended() {
  return (
    <ImageBackground
      source={require('../assets/house1.jpg')}
      style={styles.container}
      blurRadius={2}
    >
      <Text style={styles.house}>Casa Floripa</Text>

      <Text style={styles.off}>25% OFF</Text>
    </ImageBackground>
  );
}

const styles =StyleSheet.create({
  container: {
    height: 130,
    width: 230,
    marginRight: 20,
    borderRadius: 8,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 3,
    padding: 12,
    marginTop: 20
  },
  house: {
    fontFamily: 'Montserrat-Bold'
  },
  off: {

  }
})
