import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from "react-native-vector-icons/AntDesign";

import theme from "../global/styles/theme";
import HomeScreen from "../screens/HomeScreen";
import PixScreen from "../screens/PixScreen";
import PixKeysScreen from "../screens/PixKeysScreen";
import CardsScreen from "../screens/CardsScreen";
import CardCreateScreen from "../screens/CardCreateScreen";
import TransferScreen from "../screens/TransferScreen";
import LoansScreen from "../screens/LoansScreen";
import ExtractScreen from "../screens/ExtractScreen";
import SavingsScreen from "../screens/SavingsScreen";
import PixConfirmScreen from "../screens/PixConfirmScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AppTab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

export function MainRoutes() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name='HomeScreen' component={HomeScreen} />
      <MainStack.Screen name='PixScreen' component={PixScreen} />
      <MainStack.Screen name='PixKeysScreen' component={PixKeysScreen} />
      <MainStack.Screen name='CardsScreen' component={CardsScreen} />
      <MainStack.Screen name='CardCreateScreen' component={CardCreateScreen} />
      <MainStack.Screen name='TransferScreen' component={TransferScreen} />
      <MainStack.Screen name='LoansScreen' component={LoansScreen} />
      <MainStack.Screen name='ExtractScreen' component={ExtractScreen} />
      <MainStack.Screen name='SavingsScreen' component={SavingsScreen} />
      <MainStack.Screen name='PixConfirmScreen' component={PixConfirmScreen} />
    </MainStack.Navigator>
  )
}

export function ProfileRoutes() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

export function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.PRIMARY,
        tabBarInactiveTintColor: theme.colors.TEXT_LIGHT,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 77 : 60,
          paddingBottom: Platform.OS === 'ios' ? 17 : 0,
          elevation: 0,
        }
      }}
    >
      <AppTab.Screen
        name="MainRoutes"
        component={MainRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <AntDesign
                name="home"
                color={color}
                size={size}
              />
            )
          },
        }}
      />

      <AppTab.Screen
        name="ProfileRoutes"
        component={ProfileRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign name="user" color={color} size={size} />
          )
        }}
      />
    </AppTab.Navigator>
  )
}