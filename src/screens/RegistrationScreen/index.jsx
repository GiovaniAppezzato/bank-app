import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";
import { CaretLeft } from 'phosphor-react-native';

export default function RegistrationScreen({navigation}) {
    function openHome() {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={openHome}
                style={styles.buttonEntrar}>
                <CaretLeft color="#fff" size={30} />
            </TouchableOpacity>

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