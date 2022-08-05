import React from 'react'
import { Button, ButtonText } from '../styles';

export default function Sign() {

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
  )
}
