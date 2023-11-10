import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CardsScreen from "../screens/CardsScreen";
import BankStatementScreen from "../screens/BankStatementScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='CardsScreen' component={CardsScreen} />
      <Screen name='BankStatementScreen' component={BankStatementScreen} />
    </Navigator>
  )
}