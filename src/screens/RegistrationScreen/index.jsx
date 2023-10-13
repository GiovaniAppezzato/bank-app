import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CaretLeft, CalendarBlank } from 'phosphor-react-native';
import { useState } from 'react';

export default function RegistrationScreen({ navigation }) {
    function openHome() {
        navigation.navigate('Home');
    }

    const obterDataFormatada = () => {
        const data = new Date();
        const ano = data.getFullYear();
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const dia = data.getDate().toString().padStart(2, '0');
        return `${dia}/${mes}/${ano}`
    };

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState(obterDataFormatada());

    const onChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(true);
        setDate(currentDate)

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate);
    };

    const handleConfirm = (date) => {
        onChange(date)
        setShow(false)
    }

    const handleCancel = () => {
        setShow(false)
    };


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

            <View style={styles.dateContainer}>

                <Text
                    style={styles.textDate}>
                    {text}
                </Text>

                <TouchableOpacity style={styles.buttonDate} onPress={() => setShow(true)}>
                <CalendarBlank color="#fff" size={30} />
            </TouchableOpacity>

            {
                show && (
                    <DateTimePicker
                        mode="date"
                        isVisible={show}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
  
            
                    />
                )
            }
        </View>
        </View >
    )
}