import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formataValor } from '../utlis/formataValor';

export default function New(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image
        source={props.cover}
        style={styles.cover}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{props.name}</Text>

        <View style={styles.dot}>
        </View>

        <Text style={styles.badge}>Novo</Text>
      </View>

      <Text style={styles.description}>
        {props.description}
      </Text>

      <View style={styles.footer}>
        <View style={{width: '80%'}}>
          <Text style={styles.price}>
            {formataValor(props.value)}
          </Text>
        </View>

        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Ionicons name="ios-add-circle" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#FFF',
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 8,
    padding: 15,
    marginRight: 12,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 6
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#4f4a4a'
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'red',
    marginHorizontal: 4,
  },
  badge: {
    color: 'red',
    fontSize: 9,
    fontFamily: 'Montserrat-Bold',
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: '#4f4a4a'
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
  },
  price: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold'
  }
})
