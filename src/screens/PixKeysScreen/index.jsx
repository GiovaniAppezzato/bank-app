import React from "react";
import { SafeAreaView, StatusBar, View, Text, ScrollView  } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Feather from "react-native-vector-icons/Feather";
import Clipboard from '@react-native-clipboard/clipboard';
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Toast from "../../utils/toastUtils"

const PixKeysScreen = ({ navigation }) => {
  const keys = [
    {
      id: 1,
      type: 'CPF',
      value: '123.456.789-10'
    },
    {
      id: 2,
      type: 'E-mail',
      value: 'giovani.appezzato@gmail.com'
    },
    {
      id: 3,
      type: 'Phone',
      value: '(99) 99 9999-9999'
    }
  ];

  function renderTypeKey(key) {
    switch (key.type) {
      case 'CPF':
        return <FontAwesome6 name="id-card" size={24} color={theme.colors.TEXT} />
      case 'E-mail':
        return <FontAwesome6 name="envelope" size={24} color={theme.colors.TEXT} />
      case 'Phone':
        return <FontAwesome6 name="phone" size={24} color={theme.colors.TEXT} />
      default:
        return <FontAwesome6 name="key" size={24} color={theme.colors.TEXT} />
    }
  }

  function handleCopyKey(key) {
    Clipboard.setString(key.value);
    Toast.show('Chave copiada para a área de transferência');
  }

  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.BACKGROUND} />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ 
            flexGrow: 1 
          }}
        >
          <Header title='Minhas chaves' />

          <View style={styles.main}>
            <View>
              {keys.map(key => (
                <RectButton style={styles.containerKey} key={key.id}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                      {renderTypeKey(key)}
                    </View>
                    <View style={{ marginLeft: 20 }}>
                      <Text style={styles.titleKey}>Chave {key.type}</Text>
                      <Text style={styles.textKey}>
                        {key.value}
                      </Text>
                    </View>
                  </View>

                  <RectButton style={styles.buttonCopy} onPress={() => handleCopyKey(key)}>
                    <Feather name="copy" size={18} color={theme.colors.TEXT} />
                  </RectButton> 
                </RectButton>
              ))}
            </View>

            <View>
              <Button
                title='Adicionar chave'
                onPress={() => {
                  // navigation.navigate('AddKeyScreen')
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default PixKeysScreen;