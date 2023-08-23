import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function House(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={props.cover}
          style={styles.cover}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Casa muito boa para morar, vale muito a pena
        </Text>
        <Text style={styles.price}>R$ 954,60</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 260,
    height: 72,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 6,
    marginVertical: 4,
    marginRight: 10,
    marginLeft: 2,
    borderRadius: 8
  },
  cover: {
    borderRadius: 8,
    width: 60,
    height: 60
  },
  content: {
    width: '65%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    height: '100%'
  },
  description: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium'
  },
  price: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold'
  }
})
