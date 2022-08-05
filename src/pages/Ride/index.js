import React, { useState, useEffect } from "react";
import { Keyboard, SafeAreaView, ScrollView } from "react-native";
import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Input,
  AddressList,
  AddressItem,
} from "../../styles";

const Ride = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setVisible(false)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setVisible(true)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove;
    };
  }, []);

  return (
    <>
      <Container row height={60} padding={10} top={40} justify="flex-start" >
          <Title> Corrida</Title>

      </Container>

      <Container  padding={10} top={20}>
        <Container height={120} >
          <Input placeholder="Embarque" radius={10} />
          <Input placeholder="Destino" radius={10} top={5}/>
        </Container>

        <Container>
          <AddressList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            renderItem={(item, index) => (
              <AddressItem>
                <SubTitle bold> Menlo Parl</SubTitle>
                <SubTitle smal>Palo alto</SubTitle>
              </AddressItem>
            )}
          ></AddressList>
        </Container>
      </Container>

      {visible && (
        <Container padding={10} justify="flex-end" >
          <Button height={70} onPress={()=>{navigation.navigate('Option')}}>
            <ButtonText color="light"> Próximo </ButtonText>
          </Button>
        </Container>
      )}
    </>
  );
};

export default Ride;
