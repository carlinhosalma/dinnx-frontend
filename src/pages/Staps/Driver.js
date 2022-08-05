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

const Driver = ({navigation}) => {
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
            keyboardDidHideListener.remove()
        }


    },[])

    function handleSubmit(){
      navigation.navigate('Home');

    }


  return (
    <Container padding={30} justify="flex-start">
      <Container
        justify="flex-start"
        height={80}
        top={20}
        align="flex-start"
        
      >
        <Title>Cadastre seu veículo</Title>
        <SubTitle>Preencha os campos abaixo</SubTitle>
      </Container>

      <Container justify="flex-start"  align="flex-start" >
        <Spacer height={50} />
        <SubTitle bold>Dados Pessoais</SubTitle>
        <Input placeholder="Nome Completo" />
        <Spacer />
        <Input placeholder="CPF" />
        <Spacer />
        <Input placeholder="CNH" />
        <Spacer />
        <Input placeholder="Validade da CNH" />
        <Spacer height={50} />
        <SubTitle bold>Dados do Veículo</SubTitle>
        <Input placeholder="Placa do veículo" />
        <Spacer />
        <Input placeholder="Renavam" />
        <Spacer />
        <Input placeholder="Cor do veículo" />
        <Spacer />
        <Input placeholder="IPVA atual" />
      </Container>

     { visible && (
     <Container height={70} justify="flex-end">
        <Button onPress={ handleSubmit}>
          <ButtonText color="light" > Comece a usar </ButtonText>
        </Button>
      </Container>
     )}
    </Container>
  );
};

export default Driver;
