import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignUpAddress from "../screens/SignUpAddressScreen";
import SignUpPhoto from "../screens/SignUpPhotoScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name='SplashScreen' component={SplashScreen} /> */}
      <Screen name='SignInScreen' component={SignInScreen} />
      <Screen name='SignUpScreen' component={SignUpScreen} />
      <Screen name='SignUpAddressScreen' component={SignUpAddress} />
      <Screen name='SignUpPhotoScreen' component={SignUpPhoto} />
    </Navigator>
  )
}