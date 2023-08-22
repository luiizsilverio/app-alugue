import { StyleSheet, Text, ScrollView, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import New from '../components/New';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#fff'}}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder='O que você está procurando?'
            style={styles.input}
          />
        </View>

      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <New
          cover={require('../assets/house1.jpg')}
          name="Casa de praia"
          description="Casa nova a uma quadra da praia, lugar seguro e monitorado 24 hs"
          onPress={() => navigation.navigate('details')}
        />
        <New
          cover={require('../assets/house2.jpg')}
          name="Casa de praia"
          description="Casa nova a uma quadra da praia, lugar seguro e monitorado 24 hs"
          onPress={() => navigation.navigate('details')}
        />
        <New
          cover={require('../assets/house3.jpg')}
          name="Casa de praia"
          description="Casa nova a uma quadra da praia, lugar seguro e monitorado 24 hs"
          onPress={() => navigation.navigate('details')}
        />
      </ScrollView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#4f4a4a'
  }
});
