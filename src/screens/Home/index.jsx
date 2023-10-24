import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from '../Home/styles';
import { User } from 'phosphor-react-native';

export default function Home({ navigation }) {
    function openRegistrationScreen() {
        navigation.navigate('RegistrationScreen');
    }
    return (
        <View style={styles.container}>

            <Image style={styles.logo}
                source={require('../../../assets/icons/Logo.png')}
            />

            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#051923"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#051923"
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.button}>
                <Text style={styles.textButton}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={openRegistrationScreen}
                style={styles.button}>
                <Text style={styles.textButton}>
                    Abrir Conta
                </Text>
            </TouchableOpacity>

        </View>
    )
}