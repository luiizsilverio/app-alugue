import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

export function Recommended({ cover, house, offer }) {
  return (
    <ImageBackground
      source={ cover }
      style={styles.container}
      blurRadius={2}
    >
      <Text style={[styles.house, styles.shadow]}>{ house }</Text>

      <Text style={[styles.description, styles.shadow]}>{ offer } OFF</Text>
    </ImageBackground>
  );
}

const styles =StyleSheet.create({
  container: {
    height: 130,
    width: 230,
    marginRight: 10,
    // borderRadius: 8,
    // overflow: 'hidden',
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 3,
    padding: 12,
    marginTop: 20,
  },
  house: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFF',
    fontSize: 15
  },
  description: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    color: '#FFF',
  },
  shadow: {
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5
  }
})
