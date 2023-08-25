import { useState } from 'react';
import { Text, View , Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';

import SwiperContainer from '../components/SwiperContainer';

export default function Details() {
  const [_,setStars] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperContainer />
      </View>

      <View style={styles.headerContent}>
        <View style={{ width: '65%' }}>
          <Text style={styles.house}>Casa de praia</Text>
        </View>
        <View style={{ width: '35%' }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Stars
              default={4.5}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={24} style={styles.star} />
              }
              emptyStar={
                <Ionicons name="md-star-outline" size={24} style={styles.star} />
              }
              halfStar={
                <Ionicons name="md-star-half" size={24} style={styles.star} />
              }
              update={(valor) => setStars(valor)}
            />
          </View>
        </View>
      </View>

      <Text style={styles.price}>
        R$ 1.200,20
      </Text>
      <Text style={styles.description}>
        Casa nova a uma quadra do mar, lugar seguro e monitorado 24 hs.
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 20 }}
      >
        <View style={styles.slide}>
          <Image
            source={require('../assets/house5.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require('../assets/house3.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require('../assets/house2.jpg')}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  swiperContent: {
    flexDirection: 'row',
    height: 340,
    width: '100%'
  },
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#4f4a4a'
  },
  rating: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#4f4a4a'
  },
  star: {
    color: '#e7a74e',
    backgroundColor: 'transparent'
  },
  price: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#000'
  },
  description: {
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 20,
    color: '#b3aeae',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 90,
    width: 90,
    marginRight: 10,
  }

})
