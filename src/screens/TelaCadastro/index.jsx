import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "../TelaCadastro/styles";

export default function TelaCadastro() {
    return (
        <View style={styles.container}>

            <Image style={styles.logo}
                source={require('../../../assets/icons/Logo.png')}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#fff"
            />

            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#fff"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#fff"
                keyboardType="numeric"
            />
        </View>
    )
}