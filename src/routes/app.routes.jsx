import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import PixScreen from "../screens/PixScreen";
import PixKeysScreen from "../screens/PixKeysScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='PixScreen' component={PixScreen} />
      <Screen name='PixKeysScreen' component={PixKeysScreen} />
      <Screen name='HomeScreen' component={HomeScreen} />
    </Navigator>
  )
}