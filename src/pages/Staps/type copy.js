import React, {  useState } from "react";
import { Alert, Text, Switch ,TouchableOpacity} from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome,
} from "@expo/vector-icons";
import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  PickerButton,
  Spacer,
  Avatar,
} from "../../styles";

// dados que simulam o banco ----------------------------------------------------------------------
const ACESSOS = [
  {
    id: "1",
    name: "Cliente",
    icon: (
      <FontAwesome5
        name="user"
        size={34}
        color="black"
        style={{ marginTop: 20 }}
      />
    ),
    tipo: "C",
  },
  {
    id: "2",
    name: "Condutor",
    icon: (
      <Fontisto
        name="motorcycle"
        size={34}
        color="black"
        style={{ marginTop: 20 }}
      />
    ),
    tipo: "D",
  },
  {
    id: "3",
    name: "Comerciante",
    icon: (
      <FontAwesome5
        name="store"
        size={34}
        color="black"
        style={{ marginTop: 20 }}
      />
    ),
    tipo: "L",
  },
];
const User = {
  id:1,
  nome:'Elder Almeida',
  foto: 'https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg',
  tipo: ['C','D'],
  cidade:'Brazlândia',
  uf:'DF',
  forma_pagamento:'CREDITO',
  situacao:'APROVADA'

};


// -----------------------------------------------------------------------------------------------




const Type = ({ navigation }) => {
  const [modo, setModo] = useState(null);
  const [favorites, setFavorites] = useState(ACESSOS);
  const [user, setUser] = useState({...User});


  function handleActive(id){
        
    const newActive = favorites.map((acesso) => {
      return acesso.id === id ? { ...acesso, active:true }: { ...acesso, active:false};
    })
 
    setFavorites(newActive);

  }

  return (
    <>
    <TouchableOpacity style={{marginTop:40, marginLeft:30}}>
        <Avatar source={{ uri:user.foto }} />

        </TouchableOpacity>
      <Container padding={20} justify="flex-start">

        <Container
          justify="flex-start"
          height={80}
          align="flex-start"
          padding={10}
        >
          <SubTitle>Olá <SubTitle bold>{user.nome}!</SubTitle></SubTitle>
          <Title>Como quer logar desta vez?</Title>
          <SubTitle>Selecione o peril desejado </SubTitle>
        </Container>

        <Container>
          {favorites.map((acesso) => (
            <PickerButton 
            key={acesso.id} 
            style={{ marginTop: 10 }} 
            onPress={()=>handleActive(acesso.id)}  
            active= {acesso.active} 
            >

              {acesso.icon}
              
              <Title style={{ textAlign: "center", marginTop: -30 }}>
                {acesso.name}
              </Title>
            </PickerButton>
          ))}
        </Container>

        <Button align="flex-end" height={80} padding={20} type="info">
          <ButtonText color="light" size={20}>
            Próximo
          </ButtonText>
        </Button>
      </Container>
    </>
  );
};

export default Type;
