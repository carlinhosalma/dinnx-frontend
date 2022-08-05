import React,{ useState } from 'react'
import { Alert, Text,TouchableOpacity, StyleSheet,StatusBar,FlatList } from 'react-native'
import { Container, Button, ButtonText, Title, SubTitle, PickerButton} from '../../styles';
import { FontAwesome5, MaterialCommunityIcons , Fontisto   } from '@expo/vector-icons'; 
import RadioButton from '../../components/RadioButton';



      
    const DATA  = [
        {
            id: '1',
            title: 'Carro',
           
          },
          {
            id: '2',
            title: 'Bike',
          },
          {
            id: '3',
            title: 'Moto',
          },
          {
            id: '4',
            title: 'Frete',
          },
          {
            id: '5',
            title: 'Guincho',
          },
          {
            id: '6',
            title: 'Mudança',
          }
    ]

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
          <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
      );


const Option = ({ navigation })=>{
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
      };



function handleClient(){
   // Alert.alert('Acessar como Entregador');
    navigation.navigate('Driver');
}

    return(
        <Container padding={30} justify="flex-start">
            <Container 
                justify="flex-start" 
                height={80} 
                top={50}
                align="flex-start"
                padding={10} 
                >
                <Title>Escoha um tipo de serviço</Title>
                <Title>Transportador</Title>
                    <Container row justify="space-around" >
                       
                <SubTitle>Selecione qual será seu peril no DinnX</SubTitle>
                
                    </Container>
            </Container>

            <Container>


            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

                <PickerButton height={50} onPress={ handleClient} >
                    <Container row justify="space-between" padding={10}>
                        <FontAwesome5 name="car" size={24} color="black" />
                        <Title>Carro</Title>
                        <SubTitle>8</SubTitle>
                    </Container>
                </PickerButton>

                <PickerButton height={50} onPress={ handleClient} >
                    <Container row justify="space-between" padding={10}>
                    <MaterialCommunityIcons name="bicycle-basket" size={24} color="black" />
                        <Title>Bike</Title>
                        <SubTitle>3</SubTitle>
                    </Container>
                </PickerButton>
                <PickerButton height={50} onPress={ handleClient} >
                    <Container row justify="space-between" padding={10}>
                        <Fontisto name="motorcycle" size={24} color="black" />
                        <Title>Moto</Title>
                        <SubTitle>08</SubTitle>
                    </Container>
                </PickerButton>
                <PickerButton height={50} onPress={ handleClient} >
                    <Container row justify="space-between" padding={10}>
                        <FontAwesome5 name="truck" size={24} color="black" />
                        <Title>Caminhão</Title>
                        <SubTitle>2</SubTitle>
                    </Container>
                </PickerButton>
                <PickerButton height={50} onPress={ handleClient} >
                    <Container row justify="space-between" padding={10}>
                        <MaterialCommunityIcons name="tow-truck" size={24} color="black" />
                        <Title>Guincho</Title>
                        <SubTitle>6</SubTitle>
                    </Container>
                </PickerButton>
                <PickerButton height={50} onPress={ handleClient} >
                    <Container row justify="space-between" padding={10}>
                        <FontAwesome5 name="truck-moving" size={24} color="black" />
                        <Title>Mudança</Title>
                        <SubTitle>4</SubTitle>
                    </Container>
                </PickerButton>
              
            </Container>

            <Button align="flex-end" padding={20} type="info">
                    <ButtonText color="light"> Próximo </ButtonText>
                </Button>



        </Container>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default Option; 