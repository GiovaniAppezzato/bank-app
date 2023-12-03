import React, {useState, useRef, useEffect} from 'react';
import { Text, SafeAreaView, StatusBar, View, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { Masks } from 'react-native-mask-input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import InputMask from '../../components/Formik/InputMask';
import InputSavings from '../../components/Formik/InputSavings';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { useAccount } from '../../hooks/useAccount';
import { setValidationErrors } from '../../utils/yupUtils';

const schema = Yup.object().shape({
  amount: Yup.string().required('O valor é obrigatório'),
  type: Yup.string().required('O tipo é obrigatório'),
});

const SavingsScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMovement, setIsLoadingMovement] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { 
    account, 
    savings, 
    savingsMovements, 
    getSavings, 
    savingsTransfer, 
    getSavingsMovements 
  } = useAccount();

  const modalRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    async function loadSavings() {
      await Promise.all([
        getSavings(),
        getSavingsMovements(),
      ])

      setIsLoading(false);
    }

    loadSavings();
  }, []);

  function handleToggleModal() {
    if (isVisible) {
      modalRef.current?.close();
    } else {
      modalRef.current?.open();
    }

    setIsVisible(!isVisible);
  }

  async function onSubmit(values) {
    setIsLoadingMovement(true);

    try {
      schema.validateSync(values, {abortEarly: false});

      const amount = Number(values.amount.replace('R$', '').replace('.', '').replace(',', '.').trim());

      await savingsTransfer(amount, values.type);

      handleToggleModal();
    } catch (errors) {
      if (errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef, errors);
      }
    } finally {
      setIsLoadingMovement(false);
    }
  }

  if(isLoading) {
    return <Loading />
  }

  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.BACKGROUND}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title={'Poupança'} />

          <View style={styles.cardSavings}>
            <View style={styles.totalSavings}>
              <Text style={styles.textCard}>Poupança</Text>
              <Text style={styles.textValue}>
                {savings?.balance?.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
              <Button
                color={'white'}
                title={'Movimentar'}
                titleStyle={styles.titleButtonMovements}
                style={styles.buttonMovements}
                onPress={() => {
                  handleToggleModal();
                }}
              />
            </View>
          </View>

          <View style={styles.rowTransactions}>
            <Text style={styles.titleTransactions}>últimas movimentações</Text>

            {/* .splice(0, 5) */}
            {savingsMovements?.map(movement => (
              <View style={styles.cardTransactions} key={movement.id}>
                <AntDesign style={{marginRight: 15}} name={movement.type === 'Deposit' ? 'downcircle' : 'upcircle'}
                  size={18}
                  color={
                    movement.type === 'Deposit'
                      ? theme.colors.SUCCESS
                      : theme.colors.DANGER
                  }
                />

                <View>
                  <Text style={styles.nameTransactions}>
                    {movement.type === 'Deposit' ? 'Depósito' : 'Resgate'}
                  </Text>
                  <Text style={styles.valueTransactions}>
                    {movement?.amount?.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Text>
                </View>

                <Text style={styles.dateTrasansactions}>
                  {moment(movement.created_at).format('DD/MM/YYYY')}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>

      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          scrollViewProps={{showsVerticalScrollIndicator: false}}
          overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          onClose={() => {
            setIsVisible(false);
          }}
        >
          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            initialValues={{
              amount: '',
              type: 'Deposit',
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View style={styles.containerModal}>
                <Text style={styles.titleModal}>Movimentar</Text>
                <View style={styles.cardMovements}>
                  <Text style={styles.textMovements}>Saldo Disponível:</Text>
                  <Text style={styles.valueMovements}>
                    {account?.balance?.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Text>
                </View>

                <InputSavings
                  label={'Escolha a opção'}
                  value={values.type}
                  formRef={formRef}
                />

                <InputMask
                  label={'Valor'}
                  placeholder={'Digite o valor'}
                  value={values.amount}
                  error={errors.amount ?? undefined}
                  mask={Masks.BRL_CURRENCY}
                  onChangeText={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  keyboardType="numeric"
                  containerStyle={{ marginTop: 20 }}
                />

                <Button
                  isLoading={isLoadingMovement}
                  title="Concluir"
                  style={{marginTop: 15}}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              </View>
            )}
          </Formik>
        </Modalize>
      </Portal>
    </React.Fragment>

    // <React.Fragment>
    //   <StatusBar
    //     barStyle="dark-content"
    //     backgroundColor={theme.colors.BACKGROUND}
    //   />
    //   <SafeAreaView style={styles.container}>
    //     <ScrollView showsVerticalScrollIndicator={false}>
    //       <Header title={'Poupança'} />
    //       <View style={styles.cardSavings}>
    //         <View style={styles.totalSavings}>
    //           <Text style={styles.textCard}>Poupança</Text>
    //           <Text style={styles.textValue}>R$ 1.000,00</Text>
    //           <Button
    //             color={'white'}
    //             title={'Movimentar'}
    //             titleStyle={{
    //               color: '#0160A6',
    //               fontSize: 15,
    //               fontFamily: theme.fonts.REGULAR,
    //             }}
    //             style={{
    //               marginTop: 10,
    //               borderRadius: 10,
    //             }}
    //             onPress={() => {
    //               handleToggleModal();
    //             }}
    //           />
    //         </View>
    //       </View>
    //       <View style={styles.rowTransactions}>
    //         <Text style={styles.titleTransactions}>últimas transações</Text>

    //         {transactions.map(transaction => (
    //           <TouchableOpacity
    //             style={styles.cardTransactions}
    //             key={transaction.id}>
    //             <AntDesign
    //               style={{marginRight: 15}}
    //               name={
    //                 transaction.type === 'success' ? 'downcircle' : 'upcircle'
    //               }
    //               size={18}
    //               color={
    //                 transaction.type === 'success'
    //                   ? theme.colors.SUCCESS
    //                   : theme.colors.DANGER
    //               }
    //             />

    //             <View>
    //               <Text style={styles.nameTransactions}>
    //                 {transaction.name}
    //               </Text>
    //               <Text style={styles.valueTransactions}>
    //                 R$ {transaction.value}
    //               </Text>
    //             </View>

    //             <Text style={styles.dateTrasansactions}>
    //               {transaction.date}
    //             </Text>
    //           </TouchableOpacity>
    //         ))}

    //         <View
    //           style={{
    //             marginVertical: 15,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //           }}>
    //           <TouchableOpacity style={{}}>
    //             <Text style={styles.titleTransactions}>Ver tudo</Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    //   <Portal>
    //     <Modalize
    //       ref={modalRef}
    //       adjustToContentHeight={true}
    //       scrollViewProps={{showsVerticalScrollIndicator: false}}
    //       overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
    //       onClose={() => {
    //         console.log('Modalize :: close');
    //         setIsVisible(false);
    //       }}>
    //       <Formik
    //         innerRef={formRef}
    //         onSubmit={onSubmit}
    //         initialValues={{
    //           amount: '',
    //           type: 'Deposit',
    //         }}>
    //         {({handleChange, handleBlur, handleSubmit, values, errors}) => (
    //           <View style={styles.containerModal}>
    //             <Text style={styles.titleModal}>Movimentar</Text>
    //             <View style={styles.cardMovements}>
    //               <Text style={styles.textMovements}>Saldo Disponível:</Text>
    //               <Text style={styles.valueMovements}>
    //                 {account?.balance?.toLocaleString('pt-br', {
    //                   style: 'currency',
    //                   currency: 'BRL',
    //                 })}
    //               </Text>
    //             </View>
    //             <InputSavings
    //               label={'Escolha a opção'}
    //               style={{marginTop: 15}}
    //               value={values.type}
    //               formRef={formRef}
    //             />

    //             <InputMask
    //               label={'Digite o valor'}
    //               placeholder={'Digite o valor para guardar'}
    //               value={values.key}
    //               error={errors.key ?? undefined}
    //               mask={Masks.BRL_CURRENCY}
    //               onChangeText={handleChange('key')}
    //               onBlur={handleBlur('key')}
    //               keyboardType="numeric"
    //             />
    //             <Button
    //               title="Concluir"
    //               onPress={handleSubmit}
    //               style={{marginTop: 15}}
    //             />
    //           </View>
    //         )}
    //       </Formik>
    //     </Modalize>
    //   </Portal>
    // </React.Fragment>
  );
};

export default SavingsScreen;
