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
                placeholderTextColor="#0582ca"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#0582ca"
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.buttonEntrar}>
                <Text style={styles.textButton}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={openRegistrationScreen}
                style={styles.buttonCadastrar}>
                <Text style={styles.textButton}>
                    Abrir Conta
                </Text>

            </TouchableOpacity>

        </View>
    )
}