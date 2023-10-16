import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { ArrowDown } from 'phosphor-react-native';
import { styles } from "./styles";

const CustomDropdown = () => {
    const sexoOptions = ["Masculino", "Feminino",];
    const [selectedSexo, setSelectedSexo] = useState(null);

    return (
        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>

            <SelectDropdown
                data={sexoOptions}
                defaultButtonText="Selecione o sexo"

                onSelect={(selectedItem, index) => {
                    setSelectedSexo(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // Texto representado após a seleção
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    // Texto representado para cada item no dropdown
                    return item;
                }}
                renderDropdownIcon={index => {
                    return <ArrowDown color='#051923' size={20} />;
                }}
                dropdownIconPosition={'right'}

                buttonStyle={{
                    width: 300,
                    height: 50,
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}
                buttonTextStyle={{
                    fontFamily: 'Poppins SemiBold',
                    fontSize: 17,
                    color: '#051923'
                }}
                rowTextStyle={{
                    fontFamily: 'Poppins SemiBold',
                    fontSize: 17,
                    color: '#051923',
                }}
            />

        </View>
    );
};


export default CustomDropdown;
