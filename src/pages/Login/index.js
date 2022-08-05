import React, { useState, useEffect } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Zocial } from "@expo/vector-icons";
import AuthContext from "../../Contexts/Auth";


import {
  Container,
  Button,
  ButtonText,
  Image,
  Spacer,
  Title,
  SubTitle,
} from "../../styles";

import bgBotton from "../../../assets/DinnX.png";
import Type from "../Staps/type";

const Login = ({ navigation }) => {
  const [authData, setAuthData] = useState();
   const { signed } = useContext(AuthContext);

  useEffect(() => {
    const authDataGoogle = AsyncStorage.getItem('@UserData');
    setAuthData(JSON.stringify(authDataGoogle) );

    loadStorageData();
  }, []);

  async function loadStorageData() {
    try {
      const authDataGoogle = await AsyncStorage.getItem('@UserData');
      if(authDataGoogle){
        console.log('logado');
      }
    } catch (error) {
      AsyncStorage.clear();
    } finally {
      setisLoading(false);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const CLIENT_ID =
        "295591093153-9ve1hr2ms9s9b7ph657ba9fjej2j3pka.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@carlinhosalma/dinnx";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl });
      // console.log(type, params);
      if (type == "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const user = await response.json();

        await AsyncStorage.setItem("@UserData", JSON.stringify(user));

        return setAuthData(user);

        // await  AsyncStorage.clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container bgColor="preto" align="center" padding={50}>
        <Image source={bgBotton} height={53} width={200} align="flex-start" />

        <Title size={42} color="light" top={30}>
          Acessar{"\n"}
          sua conta
        </Title>
        <Spacer Spacer height={30} />
        <SubTitle color="light" height={50}>
          Utilize uma das opções{"\n"}
          para acessar mais rápido
        </SubTitle>

        <Spacer Spacer height={40} />
        <Button
          type="danger"
          radius="10"
          height={80}
          onPress={() => handleGoogleSignIn()}
        >
          <ButtonText color="light" size={20}>
            Entrar com o <AntDesign name="google" size={23} />
            oogle
          </ButtonText>
        </Button>

        <Spacer height={20} />
        <Button
          type="info"
          height={80}
          radius="10"
          onPress={() => navigation.navigate(Type)}
        >
          <ButtonText color="light" size={20}>
            Entrar com o <Zocial name="facebook" size={23} />
            acebook
          </ButtonText>
        </Button>
      </Container>
    </>
  );
};
export default Login;
