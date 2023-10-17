import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #FFFFF1;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  `;

export const ContainerHeader = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HeaderSub = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Message = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #FFF;
  margin-start: 12%;  
  zIndex: 1;
  width: 95%;
  align-items: flex-start;
  justify-content: flex-start;
  `;

export const Logo = styled.ImageBackground`
  resizeMode: stretch;
  width: 104%;
  height: 347.50px;
  align-items: flex-start;
  justify-content: center;
`;

export const Header = styled(Text)`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 18%;
  color: #FFf; 
  align-self: center;
  margin-end: 17%;
`;

export const InputContainer = styled(View)`
  margin-bottom: 8px;
  margin-top: 8px;
  
`;

export const Label = styled(Text)`
  font-size: 16px;
  margin-bottom: 2px;
  margin-start: 25px;
  font-weight: bold;
  color: #000; 
`;

export const ErrorText = styled(Text)`
  color: #FF0000; 
  font-size: 14px;
  margin-top: 5px;
  margin-start: 25px;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #68B2F8;
  width: 400px;
  height: 61px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
