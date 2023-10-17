import styled from 'styled-components/native';
import { ScrollView } from "react-native";


export const Header = styled.View`
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
  margin-bottom: 20%;
  margin-start: 10%;  
  zIndex: 1;
  width: 50%;
  align-items: center;
  justify-content: center;
  text-Align:center;
  `;

export const Logo = styled.ImageBackground`
  resizeMode: stretch;
  width: 104%;
  height: 347.50px;
  align-items: flex-start;
  justify-content: center;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ScrollViewContent = styled(ScrollView)`
`;

export const PerfilImage = styled.Image`
  width: 130px;
  height: 130px;
  align-self: center;
  border-radius: 70px;
`;

export const Label = styled.Text`
  font-size: 14px;
  text-align: left;
  font-weight: 600;
  font-weight: bold;
  margin-bottom: 4px;
  color: #000;
  align-self: flex-start;
  margin-start: 50px;
`;

export const Text = styled.Text`
  font-size: 14px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 18px;
  color: #000;
`;

export const DesciptionText = styled.Text`
  font-size: 14px;
  text-align: left;
  margin-bottom: 18px;
  color: #000;
  max-width: 286px;
  max-height: 60px;
`;

export const ContainerDesciption = styled.View`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #68B2F8;
  border-radius: 4px;
  width: 330px;
  height: 80px;
`;

export const StyledDate = styled.Text`
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 18px;
  color: #000;
  align-self: flex-end;
  margin-end: 25px;
`;

export const ButtonInfo = styled.TouchableOpacity`
  width: 330px;
  height: 26px;
  border-radius: 3px;
  background-color: #68B2F8;
  margin-bottom: 16px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`;
export const ButtonTextInfo = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 14px;
`;

export const ButtonImage = styled.TouchableOpacity`
  width: 330px;
  height: 125px;
  border-radius: 3px;
  background-color: #68B2F8;
  margin-bottom: 16px;
  margin-top: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 377px;
  height: 61px;
  border-radius: 5px;
  background-color: #68B2F8;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  flex-direction: row;
  margin-bottom: 12px;
  font-weight: 600;
  justify-content: space-between;
`;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #68B2F8;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  align-self: center;
`;

export const ModalButtonContainer = styled.View`
  
`;


export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  align-self: center;
`;

export const ModalContainer = styled.Modal``;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 300px;
`;


export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

