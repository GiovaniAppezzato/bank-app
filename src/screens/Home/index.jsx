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
                placeholderTextColor="#696969"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#696969"
            />

            <TouchableOpacity style={styles.buttonLogar}>
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