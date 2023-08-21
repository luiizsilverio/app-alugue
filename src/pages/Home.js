import { StyleSheet, Text, ScrollView, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
export default function Home() {
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
