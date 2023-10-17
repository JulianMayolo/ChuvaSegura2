import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, RefreshControl } from 'react-native';
import { useRoute, useNavigation, useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImgHeader from '../../assets/header.jpeg';
import MapView, { Marker } from 'react-native-maps';
import {
    Container,
    Header,
    Logo,
    Message,
    ScrollViewContent,
    Label,
    Text as StyledText,
    StyledDate,
    Button,
    ButtonText,
    ButtonInfo,
    ButtonTextInfo,
    DesciptionText,
    ContainerDesciption,
    ButtonImage,
    ModalBackground,
    ModalButton,
    ModalButtonContainer,
    ModalButtonText,
    ModalContainer,
    ModalText,
    ModalContent
} from './styles';

export default function Details() {
    const route = useRoute();
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [ocors, setOcors] = useState();
    const [loadingOcors, setLoadingOcors] = useState(false);
    const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);


    async function deleteUser(id) {
        try {
            setIsRefreshing(true);

            const token = await AsyncStorage.getItem('@authToken');

            const response = await api.delete(`occurrences/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                console.log("Ocorrência deletada com sucesso");
                closeConfirmationModal();
                navigation.navigate('Home');
            } else if (response.status === 404) {
                console.error("Ocorrência não encontrado");
            } else {
                console.error("Erro ao deletar ocorrência");
            }
        } catch (error) {
            console.error('Erro ao carregar  ocorrência:', error);
        } finally {
            setIsRefreshing(false);
        }
    }

    const openConfirmationModal = () => {
        setConfirmationModalVisible(true);
    };

    const closeConfirmationModal = () => {
        setConfirmationModalVisible(false);
    };

    const confirmDeletion = () => {
        deleteUser(ocors.id);
    };

    function riskLevelString(riskLevel) {
        switch (riskLevel) {
            case 1:
                return '1 - Baixo';
            case 2:
                return '2 - Médio';
            case 3:
                return '3 - Moderado';
            case 4:
                return '4 - Alto';
            case 5:
                return '5 - Perigo';
            default:
                return 'Nível Desconhecido';
        }
    }

    async function loadOcors() {
        try {
            setLoadingOcors(true);
            const token = await AsyncStorage.getItem('@authToken');
            const response = await api.get(`occurrences/${route.params?.data}`, {
                headers: { Authorization: `Bearer ${token}`, },
            });
            setOcors(response.data.data);
        } catch (error) {
            console.error('Erro ao carregar as ocorrências():', error);
        } finally {
            setLoadingOcors(false);
        }
    }

    useEffect(() => {
        if (isFocused) {
            loadOcors();
        }
    }, [isFocused]);

    if (loadingOcors) {
        return (
            <Container>
                <ActivityIndicator size={36} color="#000" />
            </Container>
        )
    }

    return (
        <>
            {ocors && (
                <ScrollViewContent
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={loadOcors} // Chame a função de carregamento de dados
                        />
                    }
                >
                    <Container>
                        <Header>
                            <Logo source={ImgHeader}>
                                <Message>{ocors.title.toUpperCase()}</Message>

                            </Logo>
                            <StyledDate>{format(new Date(ocors.created_at), 'dd/MM/yyyy')}</StyledDate>
                        </Header>
                    </Container>
                    <Container>
                        {/* <PerfilImage
                                source={{ uri: ocors.image }}
                            /> */}
                        {/* <StyledText>{format(ocorDate, 'dd/MM/yyyy')}</StyledText> */}
                        <Label>DESCRIÇÃO</Label>
                        <ContainerDesciption>
                            <DesciptionText>{ocors.description}</DesciptionText>
                        </ContainerDesciption>
                        <Label>CATEGORIA</Label>
                        <ButtonInfo>
                            <ButtonTextInfo>{ocors.category.toUpperCase()}</ButtonTextInfo>
                        </ButtonInfo>
                        <Label>NÍVEL DE RISCO</Label>
                        <ButtonInfo>
                            <ButtonTextInfo>{riskLevelString(ocors.risk_level).toUpperCase()}</ButtonTextInfo>
                        </ButtonInfo>
                        <Label>STATUS</Label>
                        <ButtonInfo>
                            <ButtonTextInfo>{ocors.status.toUpperCase()}</ButtonTextInfo>
                        </ButtonInfo>
                        <Label>FOTOGRAFIA DA OCORRÊNCIA</Label>
                        <ButtonImage>
                            <ButtonTextInfo></ButtonTextInfo>
                        </ButtonImage>
                        <Label>LOCALIZAÇÃO</Label>
                        <ButtonImage>
                            <View style={{ width: 330 }}>
                                {ocors && (
                                    <MapView
                                        style={{ width: 330, height: 125 }}
                                        initialRegion={{
                                            latitude: parseFloat(ocors.latitude),
                                            longitude: parseFloat(ocors.longitude),
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                    >
                                        <Marker
                                            coordinate={{
                                                latitude: parseFloat(ocors.latitude),
                                                longitude: parseFloat(ocors.longitude),
                                            }}
                                            title="Minha Localização"
                                            description="Estou aqui!"
                                        />
                                    </MapView>
                                )}
                            </View>
                        </ButtonImage>

                        <Button onPress={openConfirmationModal}>
                            <ButtonText>
                                Remover
                            </ButtonText>
                        </Button>

                        <ModalContainer
                            visible={isConfirmationModalVisible}
                            transparent={true}
                            animationType="slide"
                        >
                            <ModalBackground>
                                <ModalContent>
                                    <ModalText>Tem certeza de que deseja excluir esta ocorrência?</ModalText>
                                    <ModalButtonContainer>
                                        <ModalButton onPress={confirmDeletion}>
                                            <ModalButtonText>Confirmar</ModalButtonText>
                                        </ModalButton>
                                        <ModalButton onPress={closeConfirmationModal}>
                                            <ModalButtonText>Cancelar</ModalButtonText>
                                        </ModalButton>
                                    </ModalButtonContainer>
                                </ModalContent>
                            </ModalBackground>
                        </ModalContainer>

                        <Button onPress={() => navigation.goBack()}>
                            <ButtonText>Lista de ocorrências</ButtonText>
                        </Button>
                    </Container>
                </ScrollViewContent>
            )}
        </>
    );
}

