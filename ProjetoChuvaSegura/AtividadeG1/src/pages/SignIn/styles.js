import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color: #FFFF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
  width: 80%;
  height: 250px;
  resizeMode: contain;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
  border-bottom-color: #d3d3d3;
  border-bottom-width: 2px;
`;


export const SubmitButton = styled.TouchableOpacity`
  width: 377px;
  height: 61px;
  border-radius: 5px;
  background-color: #68B2F8;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 24px;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 180px;
  margin-bottom: 0px;
`;

export const LinkText = styled.Text`
  color: #171717;
  font-size: 20px;
`;

export const Labels = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  align-self: flex-start;
  justify-content: flex-start;
  margin-start: 30px;
`;