import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from '../Home/styles';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../../../assets/icons/Logo.png')}
            />

            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#fff"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#fff"
            />

            <TouchableOpacity style={styles.buttonEntrar}>
                <Text style={styles.textButton}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCadastrar}>
                <Text style={styles.textButton}>
                    Cadastrar
                </Text>
            </TouchableOpacity>

        </View>
    )
}