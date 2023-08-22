import { StyleSheet, Text, ScrollView, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import New from '../components/New';
import imoveis from '../mocks/imoveis';
import House from '../components/House';

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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {
          imoveis.map((imovel) => {
            return (
            <New
              key={imovel.id}
              cover={imovel.cover}
              name={imovel.name}
              description={imovel.description}
              value={imovel.value}
              onPress={() => navigation.navigate('details')}
            />
          )})
        }
      </ScrollView>

      <View style={styles.proximo}>
        <Text style={styles.title}>Próximo de você</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <House />
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
  },
  proximo: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  }
});
