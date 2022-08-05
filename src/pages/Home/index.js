import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons, Foundation , MaterialCommunityIcons  } from '@expo/vector-icons'; 

import * as Location from 'expo-location';
import {
  Container,
  Title,
  SubTitle,
  Spacer,
  Map,
  Avatar,
  Input,
  Button,
  ButtonText,
  VerticalSeparator,
  Bullet,
  PulseCircle,
} from "../../styles";

const Home = ({ navigation }) => {
  const [tipo, setTipo] = useState('C'); // L = LOJA,  D = DRIVER , C = CLIENT
  const [status, setStatus] = useState('S'); //S- SEM ENTREGA, R - ROTA CONFIRMADA,  I- INFORMAÇÕES, P- PESQUISA, C - CORRIDA
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const[latitude, setLatitude] = useState(null);
  const[longitude, setLongitude] = useState(null);
  
function handleAgendar(){
  setStatus('R')
}


useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const {latitude, longitude } = location;
    setLatitude(location.latitude);
    setLongitude(location.longitude);
    setLocation(location);
  })(handlePositionReceived);
}, []);

function handlePositionReceived(coords){
  console.log(coords.latitude)
}

let text = 'Waiting..';
if (errorMsg) {
  text = errorMsg;
} else if (location) {
  text = JSON.stringify(location);
  console.log(location);
}






  return (
    <Container>
      <Map
        initialRegion={{
          latitude: -15.669363455664088,
          longitude:  -48.20050506777539,
          latitudeDelta: 0.0082,
          longitudeDelta: 0.0081,
        }}
        disabled={status == "P"}
        width={Dimensions.get('window').width} 
        height={Dimensions.get('window').height} 
        zoom={15}
        
      />

      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={20}
        zIndex={999}
        pointerEvents="box-none"
        // bgColor="primary"
        style={{ height: "100%" }}
      >
        {/* parte superior */}

        <Container  justify="flex-start" align="flex-start" top={10}>
          {/* Avatar //"https://graph.facebook.com/${user.fbId}/picture?type=large&access_token=${user.access_token}"*/}

          { ( status == "S" && tipo == "D" ) && (
            <TouchableOpacity>
              <Avatar
                //elevation={50}
                source={{
                  uri:
                    "https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg",
                    
                }}
              />
            </TouchableOpacity>
          )}

          {/* 01 ESTADO INCIAL DO CLIENTE */ }

        

         {/* 02  CLIENTE CONFIRMAR ROTA */ }

         {tipo === "C" && status === "R" && (
          <Container
            justify="flex-start"
            padding={20}
            align="flex-start"
            elevation={50}
            height={280}
            bgColor="light"
            top={30}
            radius={10}
          >
            <SubTitle>Olá, Thiago!</SubTitle>
            <Title>Vamos confirmar esta rota?</Title>
            <SubTitle>Altere as horas para agendar um horário</SubTitle>
            <Spacer />

            <Container row justify="space-between" >
            <Foundation name="target-two" size={24} color="blue" />
              <Input width={290}  placeholder="Seu local" radius={10} />
            </Container>

            <Spacer />
            <Container row justify="space-between">
            <MaterialIcons name="location-pin" size={24} color="red" />
              <Input width={290}  placeholder="Local de destino" radius={10} />
            </Container>
            <Spacer />

            <Container row justify="space-between">
            <MaterialCommunityIcons name="clock" size={24} color="grey" />
              <Input width={290}  placeholder="Agendar horário" radius={10} />
            </Container>
          </Container>
        )}

          {status !== "S" && tipo == "L"  && (
            <Container
              elevation={50}
              height={150}
              bgColor="light"
              justify="flex-end"
            >
              <Container padding={20}>
                <Container justify="flex-start" row>
                  <Bullet />
                  <SubTitle> Endereço de embarque completo</SubTitle>
                </Container>
                <Container justify="flex-start" row>
                  <Bullet destination />
                  <SubTitle> Endereço de embarque destino</SubTitle>
                </Container>
              </Container>
              <Button type="dark" compact>
                <ButtonText color="light">Toque aqui para editar</ButtonText>
              </Button>
            </Container>
          )}
        </Container>


        {/* ------------------------------ parte de baixo do mapa --------------------------------------*/}


        {tipo === "C" && status === "S" && (
          <Container
            justify="flex-start"
            padding={20}
            align="flex-end"
            elevation={50}
            height={180}
            bgColor="light"
            top={30}
            radius={10}
          >
            <SubTitle>Olá, Helder! {tipo }</SubTitle>
            <Title>Informe o local de destino?</Title>
            <Spacer />
            <Container row justify="space-between">
            <MaterialIcons name="location-pin" size={24} color="red" />
              <Input width={300}  placeholder="Local de destino" radius={10}  onFocus={ ()=> navigation.navigate("Ride")} />
            </Container>
            
          </Container>
        )}


        {/*VISÃO INICIAL DO ENTREGADOR*/}

        {tipo === "C" && status === "R" && (
          
            <Button onPress={()=>{navigation.navigate('Option')}}> 
              <ButtonText color="light" size={20}>Confirmar</ButtonText>
              </Button>
          
        )}


        {/* Procurando entregadores*/}
        {tipo === "L" && status === "P" && (
          <Container padding={20} zIndex={-1}>
            <PulseCircle
              numPulses={3}
              diameter={400}
              speed={20}
              duaration={2000}
            />
          </Container>
        )}
        {/* do estabelecimento 
             STATUS
            S- SEM ENTREGA, 
            I- INFORMAÇÕES,
            P- PESQUISA, 
            C - CORRIDA
            
            TIPO
            L = LOJA,  
            D = DRIVER , 
            C = CLIENT
        */}

        {/* ESTADO INCIAL DO ESTABELECIMENTO */}

        {tipo === "L" && status === "S" && (
          <Container
            justify="flex-start"
            padding={20}
            align="flex-start"
            elevation={50}
            height={150}
            bgColor="light"
          >
            <SubTitle>Olá, Giraffas.</SubTitle>
            <Title>Para onde é a entrega?</Title>
            <Spacer />
            <Input placeholder="Procure um destino" />
          </Container>
        )}
        {/* "Cancelar Entrega" : "Confirmar Entrega" */}

        {tipo === "L" && (status == "I" || status == "P") && (
          <Container
            justify="flex-end"
            align="flex-start"
            elevation={50}
            height={180}
            bgColor="light"
          >
            <Container padding={20}>
              <SubTitle> DinnX Convencional</SubTitle>
              <Container row>
                <Container>
                  <Title>R$ 13,90</Title>
                </Container>
                <VerticalSeparator />
                <Container>
                  <Title>5 mins</Title>
                </Container>
              </Container>
            </Container>
            <Button type={status == "P" ? "muted" : "primary"}>
              <ButtonText color={status == "P" ? "dark" : "light"}>
                {status == "P" ? "Cancelar Entrega" : "Confirmar Entrega"}
              </ButtonText>
            </Button>
          </Container>
        )}

        {/*VISÃO INICIAL DO ENTREGADOR*/}

        {tipo === "D" && status === "S" && (
          <Container
            justify="flex-start"
            padding={20}
            align="flex-start"
            elevation={50}
            height={150}
            bgColor="light"
          >
            <SubTitle>Olá, motoqueiro. info</SubTitle>
            <Title>Nenhuma corrida encontrada</Title>
          </Container>
        )}

        

       

        {/*CORRIDA EM ANDAMENTO*/}
        {tipo == "C" && status === "C" && (
          <Container justify="flex-end" bgColor="light" height={120}>
            <Container
              border="primary"
              justify="flex-end"
              align="flex-start"
              row
            >
              <Container justify="flex-start" padding={20} row>
                <Avatar
                  small
                  source={{
                    uri:
                      "https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg",
                  }}
                />

                <Container justify="flex-start">
                  <SubTitle bold> Silvio Sampaio</SubTitle>
                  <SubTitle small>JBC2548,BMX, Preta </SubTitle>
                </Container>
              </Container>
              <VerticalSeparator />
              <Container padding={20} width={120}>
                <Container justify="flex-start">
                  <Title>R$ 13,90</Title>
                  <SubTitle small>Aprox. 5 mins</SubTitle>
                </Container>
              </Container>
            </Container>
            <Button type="muted">
              <ButtonText> CANCELAR CORRIDA </ButtonText>
            </Button>
          </Container>
        )}

        {/* MOTORISTA EM CORRIDA */}

        {tipo == "D" && status === "C" && (
          <Container justify="flex-end" bgColor="light" height={170}>
            <Container
              border="primary"
              justify="flex-end"
              align="flex-start"
              row
            >
              <Container justify="flex-start" margin={5} row>
                <Avatar
                  small
                  source={{
                    uri:
                      "https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg",
                  }}
                />

                <Container justify="flex-start" height={40}>
                  
                    <Container justify="flex-start" row>
                      <Bullet />
                      <SubTitle small numberOfLines={1}> Endereço de embarque completo</SubTitle>
                    </Container>
                    <Container justify="flex-start" row>
                      <Bullet destination />
                      <SubTitle small numberOfLines={1}> Endereço de embarque destino</SubTitle>
                    </Container>
                 
                </Container>
              </Container>
              <VerticalSeparator />
              <Container padding={20} width={120}>
                <Container justify="flex-start">
                  <Title>R$ 13,90</Title>
                  <SubTitle small>Aprox. 2 mins</SubTitle>
                </Container>
              </Container>
            </Container>
            <Button type="danger" height={100} >
              <ButtonText color="light" size={20}  > ACEITAR A CORRIDA </ButtonText>
            </Button>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default Home;
