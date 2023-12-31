import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignUpAddress from "../screens/SignUpAddressScreen";
import SignUpPhoto from "../screens/SignUpPhotoScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='SignInScreen' component={SignInScreen} />
      <Screen name='SignUpScreen' component={SignUpScreen} />
      <Screen name='SignUpAddressScreen' component={SignUpAddress} />
      <Screen name='SignUpPhotoScreen' component={SignUpPhoto} />
    </Navigator>
  )
}