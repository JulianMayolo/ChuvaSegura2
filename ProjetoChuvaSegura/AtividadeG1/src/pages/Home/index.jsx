import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from "@expo/vector-icons";
import api from '../../services/api';
import OcorsList from '../../components/OcorsList';
import Search from '../../components/Search';
import ImgLocaliza from '../../assets/localiza.png'
import { AuthContext } from '../../contexts/auth';
import { useNavigation, useIsFocused } from '@react-navigation/native'
import {
    Container,
    Header,
    Message,
    List,
    Button,
    ButtonText,
    Warning,
    Logo,
    HeaderTop,
    HeaderUnder,
    ButtonSignOut,
    ButtonTextSignOut,
} from './styles'
import {
    ModalBackground,
    ModalButton,
    ModalButtonContainer,
    ModalButtonText,
    ModalContainer,
    ModalText,
    ModalContent
} from '../DetailsOcors/styles';

export default function Home() {
    const { loading, signOut } = useContext(AuthContext);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [ocor, setOcor] = useState([]);
    const [filteredOcor, setFilteredOcors] = useState([]);
    const [loadingOcor, setLoadingOcor] = useState(false);
    const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const openConfirmationModal = () => {
        setConfirmationModalVisible(true);
    };

    const closeConfirmationModal = () => {
        setConfirmationModalVisible(false);
    };

    const confirmSignOut = () => {
        signOut();
    };

    async function loadOcor() {
        try {
            setIsRefreshing(true);

            setLoadingOcor(true);
            const token = await AsyncStorage.getItem('@authToken');
            const response = await api.get('occurrences?order_by[column]=created_at&order_by[direction]=desc', {
                headers: { Authorization: `Bearer ${token}`, },
            });

            setOcor(response.data.data);
            setFilteredOcors(response.data.data);
        } catch (error) {
            console.error('Erro ao carregar as ocorrências aqui:', error);
        } finally {
            setIsRefreshing(false);
            setLoadingOcor(false);
        }
    }

    useEffect(() => {
        if (isFocused) {
            loadOcor();
        }
    }, [isFocused]);

    const handleFilterChange = (filterText) => {
        if (filterText === '') {
            setFilteredOcors(ocor);
        } else {
            const filtered = ocor.filter((ocors) =>
                ocors.title.toLowerCase().includes(filterText.toLowerCase())
            );
            setFilteredOcors(filtered);
        }
    };

    if (loadingOcor || loading) {
        return (
            <Container>
                <ActivityIndicator size={36} color="#000" />
            </Container>
        )
    }

    return (
        <Container>
            {filteredOcor.length > 0 ? (
                <>
                    <HeaderTop>
                        <ButtonSignOut onPress={openConfirmationModal}>
                            <ButtonTextSignOut>Sair</ButtonTextSignOut>
                            <FontAwesome5 name="sign-out-alt" size={40} color="grey" />
                        </ButtonSignOut>
                    </HeaderTop>
                    <Header>
                        <Logo source={ImgLocaliza}></Logo>
                        <Message>
                            Ocorrências perto de você
                        </Message>

                    </Header>
                    <HeaderUnder>
                        <Button onPress={() => navigation.navigate('CreateOcors')}>
                            <ButtonText>Nova ocorrência</ButtonText>
                        </Button>
                    </HeaderUnder>

                    <Search onFilterChange={handleFilterChange} />

                    <List
                        data={filteredOcor}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <OcorsList data={item} />}
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefreshing}
                                onRefresh={loadOcor}
                            />
                        }
                    />
                    <ModalContainer
                        visible={isConfirmationModalVisible}
                        transparent={true}
                        animationType="slide"
                    >
                        <ModalBackground>
                            <ModalContent>
                                <ModalText>Tem certeza de que deseja sair?</ModalText>
                                <ModalButtonContainer>
                                    <ModalButton onPress={confirmSignOut}>
                                        <ModalButtonText>Sim</ModalButtonText>
                                    </ModalButton>
                                    <ModalButton onPress={closeConfirmationModal}>
                                        <ModalButtonText>Cancelar</ModalButtonText>
                                    </ModalButton>
                                </ModalButtonContainer>
                            </ModalContent>
                        </ModalBackground>
                    </ModalContainer>
                </>
            )
                :
                <>
                    <HeaderTop>
                        <ButtonSignOut onPress={() => handleSignOut()}>
                            <ButtonTextSignOut>Sair</ButtonTextSignOut>
                            <FontAwesome5 name="sign-out-alt" size={40} color="grey" />
                        </ButtonSignOut>
                    </HeaderTop>
                    <Header>
                        <Logo source={ImgLocaliza}></Logo>
                        <Message>
                            Ocorrências perto de você
                        </Message>

                        <Button onPress={() => navigation.navigate('CreateOcors')}>
                            <ButtonText>Nova ocorrência</ButtonText>
                        </Button>
                    </Header>
                    <HeaderUnder>
                        <Button onPress={() => navigation.navigate('CreateOcors')}>
                            <ButtonText>Nova ocorrência</ButtonText>
                        </Button>
                    </HeaderUnder>
                    <Search onFilterChange={handleFilterChange} />

                    <List
                        data={filteredOcor}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <OcorsList data={item} onDelete={deleteUser} />}
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefreshing}
                                onRefresh={loadOcor}
                            />
                        }
                    >
                    </List>
                    <ModalContainer
                        visible={isConfirmationModalVisible}
                        transparent={true}
                        animationType="slide"
                    >
                        <ModalBackground>
                            <ModalContent>
                                <ModalText>Tem certeza de que deseja sair?</ModalText>
                                <ModalButtonContainer>
                                    <ModalButton onPress={confirmSignOut}>
                                        <ModalButtonText>Sim</ModalButtonText>
                                    </ModalButton>
                                    <ModalButton onPress={closeConfirmationModal}>
                                        <ModalButtonText>Cancelar</ModalButtonText>
                                    </ModalButton>
                                </ModalButtonContainer>
                            </ModalContent>
                        </ModalBackground>
                    </ModalContainer>
                    <Warning>Sem resultados...</Warning>
                </>
            }
        </Container>
    )
}