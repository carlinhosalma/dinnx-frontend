import React, { useEffect, useState } from "react";
import { Alert, Text, Switch, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  Entypo,
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
const Acessos = [
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
  id: 1,
  nome: "Elder Almeida",
  foto:
    "https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg",
  tipo: ["C", "D"],
  cidade: "Brazlândia",
  uf: "DF",
  forma_pagamento: "CREDITO",
  situacao: "APROVADA",
};


const storeData = async (User) => {
  try {
    const jsonValue = JSON.stringify(User)
    await AsyncStorage.setItem('@user', jsonValue)
  } catch (e) {
    // saving error
  }
}


// -----------------------------------------------------------------------------------------------

const Type = ({ navigation }) => {
  const [modo, setModo] = useState(null);
  const [favorites, setFavorites] = useState(Acessos);
  const [user, setUser] = useState();

  useEffect(()=>{
   const user = AsyncStorage.getItem('@UserData');
  console.log(JSON.stringify(user) );
 // AsyncStorage.removeItem('@AuthData');

 

   
  },[])

  function handleActive(id) {
    const newActive = favorites.map((acesso) => {
      return acesso.id === id
        ? { ...acesso, active: true }
        : { ...acesso, active: false };
    });

    setFavorites(newActive);

    switch (id) {
      case "1":
        navigation.navigate("Home");
        //alert('Option')
        break;
      case "2":
        //alert('Deliveries')
        navigation.navigate("Deliveries");
        break;
      case "3":
        // alert('Home')
        navigation.navigate("Home");
        break;
    }
  }

  return (
    <>
      <Container
        justify="space-between"
        height={100}
        top={20}
        align="center"
        row
      >
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Avatar source={{ uri: '' }} />
        </TouchableOpacity>

        

        <TouchableOpacity>
          <Entypo
            name="menu"
            size={34}
            color="black"
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>
      </Container>

      <Container padding={20} justify="flex-start">
        <Container
          justify="flex-start"
          height={80}
          align="flex-start"
          padding={10}
        >
          <SubTitle>
            Olá <SubTitle bold>{''}!</SubTitle>
          </SubTitle>
          <Title>Como quer logar desta vez?</Title>
          <SubTitle>Selecione o peril desejado </SubTitle>
        </Container>

        <Container>
          {favorites.map((acesso) => (
            <PickerButton
              key={acesso.id}
              style={{ marginTop: 10 }}
              onPress={() => handleActive(acesso.id) && storeTipo(acesso.tipo)}
              active={acesso.active}
              
            >
              {acesso.icon}

              <Title style={{ textAlign: "center", marginTop: -30 }}>
                {acesso.name}
              </Title>
            </PickerButton>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default Type;
