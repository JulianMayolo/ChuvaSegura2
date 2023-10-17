import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #F0F4FF;

`;

export const ScrollViewContent = styled(ScrollView)`
`;

export const FormArea = styled.View`
  padding: 18px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const Header = styled(Text)`
font-size: 21px;
font-weight: bold;
margin-bottom: 18%;
color: #fff; 
align-self: center;
margin-end: 17%;
`;

export const InputContainer = styled(View)`
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const Label = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #000; 
  margin-start: 6.5%;
  
`;

export const ErrorText = styled(Text)`
  color: #FF0000; 
  font-size: 14px;
  margin-top: 5px;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #68B2F8;
  width: 377px;
  height: 61px;
  top: 33px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  padding-bottom: 12%;
`;

export const LinkText = styled.Text`
  color: #171717;
  font-size: 20px;
  font-weight: bold;
`;