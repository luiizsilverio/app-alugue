import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import Home from "../pages/Home";
import Details from "../pages/Details";

const Stack = createNativeStackNavigator();

export default function StacksRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'ALUGUE',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold'
            },
            headerRight: () => (
              <TouchableOpacity>
                <Feather
                  name="shopping-bag"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            )
          }}
      />
      <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: 'ALUGUE',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold'
            },
            headerRight: () => (
              <TouchableOpacity>
                <Feather
                  name="shopping-bag"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            )
          }}
      />
    </Stack.Navigator>
  )
}
