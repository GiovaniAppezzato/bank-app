import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, StatusBar, View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { RectButton } from "react-native-gesture-handler";
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import Toast from "../../utils/toastUtils";
import { useAccount } from "../../hooks/useAccount";

const CardsScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDestroy, setIsLoadingDestroy] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentDestroy, setCurrentDestroy] = useState(null);

  const modalRef = useRef(null);

  const { cards, getCards, destroyCard } = useAccount();

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

  function handleToggleModalDestroy(id) {
    if(isVisible) {
      setCurrentDestroy(null);
      modalRef.current?.close();
    } else {
      setCurrentDestroy(id);
      modalRef.current?.open();
    }

    setIsVisible(!isVisible);
  }

  async function handleDestroyCard() {
    setIsLoadingDestroy(true);

    try {
      await destroyCard(currentDestroy);
      handleToggleModalDestroy();
    } catch (error) {
      Toast.show('Ocorreu um erro ao excluir o cartão.');
    } finally {
      setIsLoadingDestroy(false);
    }
  }

  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.BACKGROUND} />
      <SafeAreaView style={styles.container}>
        <Header title={"Cartões"} />

        <View style={styles.main}>
          <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
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

                    <RectButton style={styles.buttonTrash} onPress={() => handleToggleModalDestroy(card.id)}>
                      <Feather name="trash" size={18} color={theme.colors.BACKGROUND} />
                    </RectButton>
                  </View>

                  <View>
                    <Text style={[styles.titleXl, { color: theme.colors.BACKGROUND, fontSize: 24 }]}>
                      {card?.credit_limit?.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </Text>
                    <Text style={[styles.titleSm, { color: theme.colors.BACKGROUND }]}>
                      **** {card.number.slice(-4)}
                    </Text>
                  </View>
                </View>
              ))}

              {cards.length <= 1 && (
                <TouchableOpacity
                  onPress={() => navigation.navigate('CardCreateScreen')}
                  style={styles.cardAdd}
                >
                  <View style={{ alignItems: "center" }}>
                    <AntDesign name="pluscircleo" size={50} color={theme.colors.SECONDARY} />
                    <Text style={[styles.titleSm, { color: theme.colors.SECONDARY, marginTop: 15 }]}>Pedir cartão</Text>
                  </View>
                </TouchableOpacity>
              )}
            </ScrollView>

            {cards.length > 1 && (
              <Button 
                title={'Pedir cartão'}
                color={theme.colors.PRIMARY_LIGHT}
                titleStyle={{ color: theme.colors.SECONDARY, fontFamily: theme.fonts.MEDIUM }}
                onPress={() => navigation.navigate('CardCreateScreen')}
                style={{ marginTop: 30 }}
              />
            )}
          </View>

          {/* <View style={{ marginTop: 35 }}>
            <Text style={styles.title}>
              Cartões bloqueados
            </Text>
          </View> */}
        </View>
      </SafeAreaView>

      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClose={() => {
            setIsVisible(false);
          }}
        >
          <View style={styles.containerModal}>
            <Text style={styles.titleModal}>Bloquear cartão</Text>
            <Text style={[styles.text, { marginBottom: 25 }]}>
              Tem certeza que deseja bloquear esse cartão, caso bloqueie não poderá ser desbloqueado.
            </Text>

            <Button
              isLoading={isLoadingDestroy}
              title='Excluir'
              color={theme.colors.DANGER}
              onPress={() => handleDestroyCard()}
              style={{ backgroundColor: theme.colors.DANGER }}
            />
          </View>
        </Modalize>
      </Portal>
    </React.Fragment>
  )
};

export default CardsScreen;