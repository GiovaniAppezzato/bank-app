import RegistrationScreen from '../screens/RegistrationScreen';
import Home from '../screens/Home'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name='Home'
                component={Home}
            />

            <Screen
                name='RegistrationScreen'
                component={RegistrationScreen}
            />
        </Navigator>
    )
}