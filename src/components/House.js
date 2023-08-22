import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function House() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require(`../assets/house5.jpg`)}
          style={styles.cover}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 260,
    height: 70,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 6,
    marginVertical: 5,
    marginRight: 10,
    marginLeft: 2,
    borderRadius: 8
  },
  cover: {
    borderRadius: 8,
    width: 60,
    height: 60
  }
})
