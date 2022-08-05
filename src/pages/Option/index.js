import React, { useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  PickerButton,
  Spacer,
} from "../../styles";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons"; 

const DATA = [
  {
    id: "1",
    title: "Carro",
    icon: <FontAwesome5 name="car" size={24} color="black" />,
    Qtd: "8",
    preco: "16,70",
  },
  {
    id: "2",
    title: "Bike",
    icon: (
      <MaterialCommunityIcons name="bicycle-basket" size={24} color="black" />
    ),
    Qtd: "20",
    preco: "5,40",
  },
  {
    id: "3",
    title: "Moto",
    icon: <Fontisto name="motorcycle" size={24} color="black" />,
    Qtd: "11",
    preco: "7,52",
  },
  {
    id: "4",
    title: "Frete",
    icon: <FontAwesome5 name="truck" size={24} color="black" />,
    Qtd: "0",
    preco: "115,40",
  },
  {
    id: "5",
    title: "Guincho",
    icon: <MaterialCommunityIcons name="tow-truck" size={24} color="black" />,
    Qtd: "2",
    preco: "161,20",
  },
  {
    id: "6",
    title: "Mudança",
    icon: <FontAwesome5 name="truck-moving" size={24} color="black" />,
    Qtd: "85",
    preco: "181,71",
  },
];

const Item = ({ item, onPress, backgroundColor, color }) => (
  <Container padding={10}>
    <PickerButton
      height={70}
      onPress={onPress}
      style={[styles.item, backgroundColor]}
    >
      <Container row justify="space-between">
        {item.icon}
        <Spacer width={10} />
        <SubTitle width={80}>{item.title}</SubTitle>
        <Title width={100}>R$ {item.preco}</Title>
        <SubTitle width={20} color={item.Qtd == "0" ? "danger" : "info"} bold>
          {item.Qtd}
        </SubTitle>
      </Container>
    </PickerButton>
  </Container>
);

const Option = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#93a0dd" : "#dee1f1";
    const color = item.id === selectedId ? "light" : "black";

    return (
      <>
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          color={{ color }}
        />
      </>
    );
  };

  function handleClient() {
    // Alert.alert('Acessar como Entregador');
    navigation.navigate("Driver");
  }

  return (
    <>
      <Container
        justify="flex-start"
        height={120}
        top={50}
        align="flex-start"
        padding={10}
        row
      >
        <Container>
          <Title>Escoha uma Opção</Title>
          <SubTitle>Simple, rápido, prático DinnX</SubTitle>
        </Container>
        <TouchableOpacity>
          <Entypo
            name="menu"
            size={34}
            color="black"
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>
      </Container>

      <PickerButton height={40} border="none">
        <Container row justify="center">
          <SubTitle width={210} color="info">
            CATEGORIA
          </SubTitle>
          <SubTitle width={60} color="info">
            PREÇO
          </SubTitle>
          <SubTitle width={100} color="info">
            DISPONÍVEIS
          </SubTitle>
        </Container>
      </PickerButton>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Container padding={10} align="flex-end">
        <Button
          type="info"
          height={80}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <ButtonText color="light" size={20}>
            {" "}
            Chamar{" "}
          </ButtonText>
        </Button>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 0,
  },
  title: {
    fontSize: 18,
  },
});

export default Option;
