import React, {
  useRef,
} from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';
import theme from '../../../global/styles/theme';

const InputPicker = ({
  value,
  options,
  label,
  placeholder,
  error,
  style,
  containerStyle,
  withIcon = true,
  onValueChange
}) => {
  const pickerRef = useRef();

  const showLabelPicker = () => {
    return options?.find(option => option.value === value)?.label ?? '';
  }

  return (
    <View>
      <View style={[styles.container, containerStyle ? containerStyle : {}]}>
        {label && <Text style={styles.label}>{label}</Text>}

        <TouchableOpacity 
          style={{ position: "relative" }}
          activeOpacity={0.6}
          onPress={() => {
            pickerRef.current?.focus();
          }}
        >
          <>
            <TextInput
              placeholderTextColor={theme.colors.PLACEHOLDER}
              value={showLabelPicker()}
              placeholder={placeholder}
              editable={false}
              style={[
                styles.input,
                style ? style : {},
                error ? styles.inputError : {}
              ]} 
            />

            {withIcon && (
              <Feather 
                size={22}
                color={'#969CB2'}
                style={styles.icon}
                name="chevron-down"
              />
            )}
          </>
        </TouchableOpacity>

        {error && <Text style={styles.textError}>{error}</Text>}
      </View>

      <Picker
        ref={pickerRef}
        selectedValue={value}
        style={{ display: 'none' }}
        dropdownIconColor={theme.colors.BACKGROUND} // <-- essa linha esconde o icone padrão do picker no android]
        onValueChange={(itemValue, itemIndex) => {
          onValueChange(itemValue);
        }}
      >
        {options?.map((option, index) => (
          <Picker.Item
            key={index}
            label={option.label}
            value={option.value}
          />  
        ))}
      </Picker>
    </View>
  );
}

export default InputPicker;