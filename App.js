import { NavigationContainer } from '@react-navigation/native';
import Login from "./screens/Login";
import Comanda from "./screens/comanda";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Comanda" component={Comanda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
