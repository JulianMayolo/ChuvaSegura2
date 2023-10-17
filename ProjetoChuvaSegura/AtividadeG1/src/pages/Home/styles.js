import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%; 
  background-color: #F0F4FF;
  align-items: center;
  justify-content: center;
`;
export const HeaderTop = styled.View`
  height: 45px;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: #68B2F8;
  padding-top: 2%;
  flex-direction: row;
`;
export const HeaderUnder = styled.View`
  height: 25px;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: #68B2F8;
  flex-direction: row;
`;
export const Header = styled.View`
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: #68B2F8;
  padding-top: 2%;
  flex-direction: row;
`;
export const Logo = styled.Image`
  margin-bottom: 20px;
  width: 48px;
  height: 66px;
  resizeMode: contain;
  margin-right: 10px;
  margin-start: 25px;
`;
export const Message = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4%;
  margin-start: 15px;
`;

export const Warning = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #000;
  flex: 3;
  align-self: center;

`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-top: 8%;
  margin-bottom: 2%;
`;

export const List = styled.FlatList`
  flex: 1; 
  width: 95%;
`;

export const Button = styled.TouchableOpacity`
  background-color: transparent;
  width: 107px;
  height: 22px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  margin-end: 25px;
  border-width: 2px;
  border-color: #FFF;
  align-self: flex-end;
  position: relative;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;
export const ButtonTextSignOut = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-top: 5px;
`;
export const ButtonSignOut = styled.TouchableOpacity`
  width: 90px;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-end: 25px;
  align-self: flex-end;
  position: relative;
  flex-direction: row;
  justifyContent: space-between;
`;

