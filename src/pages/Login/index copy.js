import React ,{ useEffect } from 'react'
import { Image } from 'react-native'
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Button, ButtonText, ImageLogo, Spacer} from '../../styles'



import bgBotton from '../../../assets/DinnX.png'
import Type from '../Staps/type'


    
    
    const Login = ({ navigation })=>{

    const handleGoogleSignIn = async()=>{

        try {
            const CLIENT_ID = "295591093153-9ve1hr2ms9s9b7ph657ba9fjej2j3pka.apps.googleusercontent.com"
            const REDIRECT_URI ="https://auth.expo.io/@carlinhosalma/dinnx"
            const SCOPE = encodeURI("profile email")
            const RESPONSE_TYPE="token"

            const authUrl =`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const { type, params } = await AuthSession.startAsync({ authUrl })
        } catch (error) {
            console.log(error);
        }

    }

    const checkLogin = async()=>{
        try {
            const user = await AsyncStorage.getItem('@DinnxUser');
            if(user !== null ){
           // updateUser(JSON.parse(user));
           console.log(user)
           navigation.replace('Home');
        }
        } catch (error) {
            
            AsyncStorage.setItem('@DinnxUser','123')
            navigation.replace('Type');
        }
        
    }

    useEffect(()=>{
        checkLogin();
    },[])


    return (<>
    
        <Container bgColor="preto" justify="center"  align="center"  padding={70} >
                <Image source={bgBotton} />
                <Spacer height={60} />
            
                <Button type="info" height={80} radius="4" onPress={() => navigation.navigate(Type)}>
                    <ButtonText color="light"  >Fazer Login com Facebook</ButtonText>
                </Button>
                <Spacer  Spacer height={20} />
                <Button type="light" radius="4" height={80} >
                    <ButtonText  >Fazer Login com Google</ButtonText>
                </Button>
        </Container>
    </>
    )
    
}
export default Login;