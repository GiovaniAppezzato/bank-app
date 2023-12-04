import React, { useState } from "react";
import { SafeAreaView, StatusBar, FlatList, View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import moment from "moment";

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import {useAccount} from "../../hooks/useAccount";
import {getTitleReport} from "../../utils/transferUtils";

const ExtractScreen = () => {
  const [isShowBalance, setIsShowBalance] = useState(true);
  const { reports } = useAccount();

  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.BACKGROUND} />
      <SafeAreaView style={styles.container}>
        <Header title={"Extrato"} />

        <View style={styles.main}>
          <FlatList
            style={{ flex: 1 }} 
            data={reports}
            keyExtractor={item => item?.id?.toString()}
            renderItem={({ item }) => (
              <View style={styles.cardTransactions}>
                <AntDesign
                  style={{marginRight: 15}}
                  name={item.status === 'in' ? 'downcircle' : 'upcircle'}
                  size={18}
                  color={
                    item.status === 'in'
                      ? theme.colors.SUCCESS
                      : theme.colors.DANGER
                  }
                />

                <View>
                  <Text style={styles.nameTransactions}>
                    {getTitleReport(item)}
                  </Text>
                  <Text style={styles.valueTransactions}>
                    {!isShowBalance ? 'R$ ****' : item?.amount?.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Text>
                </View>

                <Text style={styles.dateTrasansactions}>
                  {moment(item.created_at).format('DD/MM/YYYY')}
                </Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </React.Fragment>
  )
};

export default ExtractScreen;