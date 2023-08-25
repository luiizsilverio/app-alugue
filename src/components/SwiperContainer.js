import { View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

export default function SwiperContainer() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={styles.dot}
      activeDotColor="#FFF"
      activeDotStyle={styles.activeDot}
    >
      <View style={styles.slide}>
        <Image
          source={require('../assets/house1.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../assets/house2.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../assets/house3.jpg')}
          style={styles.image}
        />
      </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 10
  },
  activeDot: {
    borderColor: '#000',
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 400
  },
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ddd'
  }
})
