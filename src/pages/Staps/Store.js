import React , {useState, useEffect} from "react";
import { Keyboard } from "react-native";
import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Input,
  Spacer
} from "../../styles";

import Home from "../Home";

const Store = ({navigation}) => {
    const [visible, setVisible] = useState(true);

    useEffect(()=>{

        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow', 
            ()=> setVisible(false),
        );

        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide", 
            ()=> setVisible(true),
        );

        return ()=>{
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove
        }


    },[])


  return (
    <Container padding={30} justify="flex-start">
      <Container
        justify="flex-start"
        height={80}
        align="flex-start"
        padding={10}
      >
        <Title>Cadastre sua loja</Title>
        <SubTitle>Preencha os campos abaixo</SubTitle>
      </Container>

      <Container justify="flex-start">
        <Spacer height={50} />
        <Input placeholder="Nome da loja" />
        <Spacer />
        <Input placeholder="Endereço completo" />
        <Spacer />
        <Input placeholder="Cidade" />
        <Spacer />
        <Input placeholder="Estado" />
      </Container>

     { visible && (
     <Container height={70} justify="flex-end">
        <Button onPress={() => navigation.navigate(Home)}>
          <ButtonText color="light"  > Comece a usar </ButtonText>
        </Button>
      </Container>
     )}
    </Container>
  );
};

export default Store;
