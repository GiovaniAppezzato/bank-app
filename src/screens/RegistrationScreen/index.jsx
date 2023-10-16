import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";
import { CaretLeft } from 'phosphor-react-native';
import CustomDropdown from "./CustomDropdown";
import BirthCalendar from "./BirthCalendar";

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
                placeholderTextColor="#0582ca"
            />

            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#0582ca"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#0582ca"
            />

            <CustomDropdown />

            <BirthCalendar/>

        </View >
    )
}