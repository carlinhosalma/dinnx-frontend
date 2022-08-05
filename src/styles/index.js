import styled from "styled-components";
import MapView from "react-native-maps";

import theme from "./theme.json";

export const Container = styled.View`
  flex: 1;
  background: ${(props) =>
    props.bgColor ? theme.colors[props.bgColor] : "transparent"};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "center"};
  padding: ${(props) => props.padding || 0}px;
  width: 100%;
  align-items: ${(props) => props.align || "center"};
  max-width: ${(props) => (props.width ? props.width + "px" : "100%")};
  max-height: ${(props) => (props.height ? props.height + "px" : "auto")};
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "0"}px;
  z-index: ${(props) => props.zIndex || "1"};
 
  border-radius: ${(props) => props.radius || "0"}px;
 

`;
export const TouthSelec = styled.View`
 
  background: ${(props) =>
    props.active ? theme.colors.info50 : "transparent"};
  align-items: ${(props) => props.align || "center"};
  width: 100%;
  max-width: ${(props) => (props.width ? props.width + "px" : "100%")};

`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width + "px" : "100%")};
  padding: ${(props) => (props.compact ? 5 : 15)}px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: solid 1px #b6b6b6;
  border-radius: ${(props) => props.radius || "0"}px;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  justify-content: center;
  background: ${(props) =>
    props.type ? theme.colors[props.type] : theme.colors.primary};
   
`;
export const ButtonText = styled.Text`
  text-align: center;
  font-size: ${(props) => (props.size ? props.size + "px" : "16px")};
  color: ${(props) => (props.color ? theme.colors[props.color] : "#000")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

export const Image = styled.Image`
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  margin-bottom: ${(props) => (props.margin ? props.margin : "0")};
  align-self: ${(props) => ( props.align ||'auto')} ;
`;

export const Title = styled.Text`
  font-size: ${(props) => (props.size || '20' )}px;
  color: ${(props) => (props.color ? theme.colors[props.color]: theme.colors.dark )}; 
  font-weight: bold;
  padding: ${(props) => props.padding || "0"}px;
  width: 100%;
  max-width: ${(props) => (props.width ? props.width + "px" : "100%")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  align-items: ${(props) => props.align || "center"};
  top: ${(props) => props.top || "0"}px;
`;

export const SubTitle = styled.Text`
  width: 100%;
  font-size: ${(props) => (props.small ? 12 : 15)}px;
  opacity: 0.7;
  padding: ${(props) => props.padding || "0"}px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.dark};
  max-width: ${(props) => (props.width ? props.width + "px" : "100%")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  align-items: ${(props) => props.align || "center"};
  top: ${(props) => props.top || "0"}px;
`;

export const PickerButton = styled.TouchableOpacity`
  height: ${(props) => (props.height ? props.height + "px" : "20%")};
  top: ${(props) => props.top || "0"}px;
  border-width: 3px;
  border: ${(props) => (props.border ? props.border : "solid 1px")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: space-around;
  align-items: center;
  border-color: ${(props) =>
    props.active ? theme.colors.info + "70" : theme.colors.muted + "70"};
  background-color: ${(props) =>
    props.active ? theme.colors.info50 : theme.colors.muted50};
  width: 100%;
  max-width: ${(props) => (props.width ? props.width + "px" : "100%")};
`;

export const Input = styled.TextInput`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.muted};
  border-radius: ${(props) => props.radius || "0"}px;
  top: ${(props) => props.top || "0"}px;
  width: 100%;
  padding: 7px 15px;
  max-width: ${(props) => (props.width ? props.width + "px" : "100%")};
`;

export const Spacer = styled.View`
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  height: ${(props) => props.height || "10"}px;
  background: ${(props) =>
    props.bgColor ? theme.colors[props.bgColor] : "transparent"};
`;

export const AddressList = styled.FlatList`
  flex: 1;
  width: 100%;
  padding-top: 10px;
`;

export const AddressItem = styled.TouchableOpacity`
  padding: 10px 5px;
  align-items: flex-start;
  border-bottom: 1px solid #999;
`;

export const Avatar = styled.Image.attrs({
  elevation: 50,
})`
  width: ${(props) => (props.small ? 35 : 50)}px;
  height: ${(props) => (props.small ? 35 : 50)}px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  background: ${theme.colors.muted};
  border-radius: ${(props) => (props.small ? 35 : 50)}px;
`;

export const VerticalSeparator = styled.View`
  width: 1px;
  height: 100%;
  background: ${theme.colors.muted};
`;

export const Bullet = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${(props) => (props.destination ? "#FF2929" : "#00Eb56")};
`;

export const Map = styled(MapView)`
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

export const RadioButton = styled.TouchableOpacity`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${(props) => (props.destination ? "#FF2929" : "#00Eb56")};
`;
