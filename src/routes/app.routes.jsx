import TelaCadastro from '../screens/TelaCadastro';
import Home from '../screens/Home'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name='Home'
                component={Home}
            />

            <Screen
                name='TelaCadastro'
                component={TelaCadastro}
            />
        </Navigator>
    )
}