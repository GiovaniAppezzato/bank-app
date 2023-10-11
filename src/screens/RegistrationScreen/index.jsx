import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";
import { CaretLeft } from 'phosphor-react-native';

export default function RegistrationScreen({ navigation }) {
    function openHome() {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={openHome}
                style={styles.backButton}>
                <CaretLeft color="#fff" size={30} />
            </TouchableOpacity>

            <Image style={styles.logo}
                source={require('../../../assets/icons/Logo.png')}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#5c2e0a"
            />

            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#5c2e0a"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#5c2e0a"
            />

            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento"
                placeholderTextColor="#5c2e0a"
                keyboardType="numeric"
            />

        </View>
    )
}