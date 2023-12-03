import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { useAccount } from "../../hooks/useAccount";

const CardsScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { cards, getCards } = useAccount();

  useEffect(() => {
    async function loadCards() {
      await getCards();
      setIsLoading(false);
    }

    loadCards();
  }, [])

  if(isLoading) {
    return <Loading />
  }

  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.BACKGROUND} />
      <SafeAreaView style={styles.container}>
        <Header title={"Cartões"} />

        <View style={styles.main}>
          <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CardCreateScreen')}
                style={styles.cardAdd}
              >
                <View style={{ alignItems: "center" }}>
                  <AntDesign name="pluscircleo" size={50} color={theme.colors.SECONDARY} />
                  <Text style={[styles.titleSm, { color: theme.colors.SECONDARY, marginTop: 15 }]}>Pedir cartão</Text>
                </View>
              </TouchableOpacity>

              {cards.map(card => (
                <View style={styles.card} key={card.id}>
                  <View style={styles.cardHeader}>
                    <Image
                      source={require('../../../assets/icons/Logo.png')}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />

                    <RectButton style={styles.buttonTrash} onPress={() => {}}>
                      <Feather name="trash" size={18} color={theme.colors.BACKGROUND} />
                    </RectButton>
                  </View>

                  <Text style={[styles.titleSm, { color: theme.colors.BACKGROUND }]}>
                    **** {card.number.slice(-4)}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={{ marginTop: 35 }}>
            <Text style={styles.title}>
              Cartões bloqueados
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </React.Fragment>
  )
};

export default CardsScreen;