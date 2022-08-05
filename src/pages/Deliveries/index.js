import React, { useEffect, useState } from "react";
import { Alert, Input, Switch, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Avatar,
  TouthSelec,
  Spacer,
  Bullet,
  VerticalSeparator,
} from "../../styles";

const CategoriaChamadas = [
  {
    id: "1",
    name: "Disponíveis",
    active: true,
  },
  {
    id: "2",
    name: "Pendentes",
  },
  {
    id: "3",
    name: "Programadas",
  },
];

const ChamadasAbertas = [
  {
    id: "1",
    origem: "Quadra 3 loja 01 SN, Brazlândia",
    destino: "Quadra 5 lote 14 SN, Brazlândia",
    valor: "8,60",
    tempo: "3",
    CategoriaChamadasID: "1",
  },
  {
    id: "2",
    origem: "Quadra 26 loja 01 Vila São José, Brazlândia",
    destino: "Quadra 6 lote 20 SN, Brazlândia",
    valor: "13,90",
    tempo: "10",
    CategoriaChamadasID: "3",
  },
  {
    id: "3",
    origem: "Quadra 2 loja 11 St. Veredas, Brazlândia",
    destino: "Quadra 1 lote 52 SN, Brazlândia",
    valor: "8,90",
    tempo: "5",
    CategoriaChamadasID: "1",
  },
  {
    id: "4",
    origem: "Quadra 29 loja 4 Vila São José, Brazlândia",
    destino: "Quadra 6 lote 20 SN, Brazlândia",
    valor: "14,90",
    tempo: "11",
    CategoriaChamadasID: "1",
  },
  {
    id: "5",
    origem: "Quadra 1 loja 4 Vila São José, Brazlândia",
    destino: "Quadra 6 lote 20 Incra 8, Brazlândia",
    valor: "34,90",
    tempo: "21",
    CategoriaChamadasID: "2",
  },
  {
    id: "6",
    origem: "Quadra 1 loja 4 Vila São José, Brazlândia",
    destino: "Quadra 6 lote 20 Incra 8, Brazlândia",
    valor: "34,90",
    tempo: "21",
    CategoriaChamadasID: "2",
  },
  {
    id: "7",
    origem: "Quadra 51 loja 24 Vila São José, Brazlândia",
    destino: "Quadra 6 lote 20 Incra 8, Brazlândia",
    valor: "11,90",
    tempo: "12",
    CategoriaChamadasID: "1",
  },
];

const Deliveries = ({ navigation }) => {
  const [favorites, setFavorites] = useState(CategoriaChamadas);
  const [abertas, setAbertas] = useState(ChamadasAbertas);
  const [categoria, setCategoria] = useState(1);
  const [ativado, setAtivado] = useState(false);
  const [livre, setLivre] = useState(false);

  function handleAbertas(id) {
    const newActive = abertas.map((aberta) => {
      return aberta.id === id
        ? { ...aberta, active: true }
        : { ...aberta, active: false };
    });
    setLivre(true)
    return setAbertas(newActive);
  }

  function handleActive(id) {
    setCategoria(id);
    const newActive = favorites.map((chamada) => {
      return chamada.id === id
        ? { ...chamada, active: true }
        : { ...chamada, active: false };
    });
    return setFavorites(newActive);
  }



  return (
    <>
      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={0}
        zIndex={999}
        pointerEvents="box-none"
        // bgColor="primary"
        style={{ height: "100%" }}
      >
        {/* Avatar */}

        <Container
          justify="space-between"
          height={100}
          top={20}
          align="center"
          padding={10}
          row
        >
          <TouchableOpacity >
            <Avatar
              //elevation={50}
              source={{
                uri:
                  "https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg",
              }}
            />
          </TouchableOpacity>

          {ativado && (
            <Button
              type="success"
              width={150}
              radius={30}
              onPress={() =>setAtivado(false)}
            >
              <ButtonText>ATIVADO</ButtonText>
            </Button>
          )}
          { !ativado && (
            <Button
              type="muted"
              width={150}
              radius={30}
              onPress={() =>setAtivado(true)}
            >
              <ButtonText>DESATIVADO</ButtonText>
            </Button>
          )}

          <TouchableOpacity>
            <Entypo
              name="menu"
              size={34}
              color="black"
             
            />
          </TouchableOpacity>
        </Container>

        <Container justify="flex-start" top={10}>
          <Container row justify="flex-start" padding={0} height={50}>
            {favorites.map((chamada) => (
              <TouchableOpacity
                style={{ width: "33%" }}
                key={chamada.id}
                onPress={() => handleActive(chamada.id)}
              >
                <TouthSelec active={chamada.active} height={50}>
                  <SubTitle center style={{ marginTop: 15 }} color="preto">
                    {chamada.name}
                  </SubTitle>
                </TouthSelec>
              </TouchableOpacity>
            ))}
          </Container>

          <Container justify="flex-start" bgColor="info50" padding={10}>
            {favorites.map(
              (chamada) =>
                chamada.active && (
                  <Title key={chamada.id} color="primary">
                    Chamadas {chamada.name}
                  </Title>
                )
            )}

            { ativado && abertas.map(
              (aberta) =>
                aberta.CategoriaChamadasID == categoria && (
                  <TouchableOpacity
                    key={aberta.id}
                    onPress={() => handleAbertas(aberta.id)}
                  >
                    <Container justify="flex-start" height={90} elevation={50}>
                      <Container
                        top={10}
                        justify="flex-start"
                        bgColor={aberta.active ? "warning" : "light"}
                        row
                      >
                        <Container padding={20}>
                          <Container justify="flex-start" row>
                            <Bullet />
                            <Spacer width={3} />
                            <SubTitle color="preto" numberOfLines={1}>
                              {aberta.origem}
                            </SubTitle>
                          </Container>
                          <Container justify="flex-start" row>
                            <Bullet destination />
                            <Spacer width={3} />
                            <SubTitle color="preto" numberOfLines={1}>
                              {aberta.destino}
                            </SubTitle>
                          </Container>
                        </Container>
                        <VerticalSeparator />
                        <Container padding={20} width={125}>
                          <Container justify="flex-start">
                            <Title>R$ {aberta.valor} </Title>
                            <SubTitle small>
                              Aprox. {aberta.tempo} mins
                            </SubTitle>
                          </Container>
                        </Container>
                      </Container>
                      <Spacer />
                    </Container>
                  </TouchableOpacity>
                )
            )}
          </Container>
        </Container>

        {ativado && livre &&(<Button type="danger" height={100} onPress={()=>navigation.navigate("Home")}>
          <ButtonText color="light" size={20}>
            {" "}
            ACEITAR A CORRIDA{" "}
          </ButtonText>
        </Button>)}
      </Container>
    </>
  );
};

export default Deliveries;
