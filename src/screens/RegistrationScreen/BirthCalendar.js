import DateTimePicker from 'react-native-modal-datetime-picker';
import { CalendarBlank } from 'phosphor-react-native';
import { useState } from 'react';
import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

const BirthCalendar = () => {

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
        <View style={styles.containerDate}>

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
    );
};


export default BirthCalendar;