import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from '@react-navigation/native'
import ImgHeader from '../../assets/header.jpeg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from "../../components/ImagePicker";
import CategoryPicker from "../../components/CategoryPicker";
import RiskLevelPicker from "../../components/RiskLevelPicker";
import StatusPicker from "../../components/StatusPicker";
import TextInput from "../../components/TextInput";
import { createOcorsSchema } from '../../utils/createOcorsValidation'
import { format } from 'date-fns';
import api from '../../services/api';
import { Container, ErrorText, Header, InputContainer, Label, ScrollViewContent, StyledSwitch, Button, ButtonText, HeaderSub, Logo, Message } from './styles';
import MapView, { Marker } from 'react-native-maps';
import LocalizationPicker from '../../components/Localization';

export default function App() {
    const navigation = useNavigation();
    const [showDatePicker, setShowDatePicker] = useState(false);

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: "",
            description: "",
            category: "enchente",
            status: "preventivo",
            risk_level: 1,
            latitude: "-29.71143880",
            longitude: "-53.77776160",
            image: "",
            id_user: "",
            trust_level: null,

        },
        resolver: yupResolver(createOcorsSchema),
    });

    const onSubmit = async (data) => {
        Keyboard.dismiss();

        try {
            const dataApi = new FormData();
            const token = await AsyncStorage.getItem('@authToken');

            dataApi.append("title", data.title);
            dataApi.append("description", data.description);
            dataApi.append("category", data.category);
            dataApi.append("status", data.status);
            dataApi.append("risk_level", Number(data.risk_level));
            dataApi.append("latitude", Number(data.latitude));
            dataApi.append("longitude", Number(data.longitude));
            dataApi.append("image", data.image);

            // if (data.image) {
            //     const photo = {
            //         uri: data.image,
            //         type: "image/jpeg",
            //         name: "photo.jpg",
            //     };
            //     console.log(data.image)
            //     dataApi.append("image", photo);
            // }

            await api.post(`/occurrences`, data
                , {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            reset({
                title: "",
                description: "",
                category: "enchente",
                status: "preventivo",
                risk_level: 1,
                latitude: "",
                longitude: "",
                image: "",
            })
            navigation.navigate('Home');
        } catch (error) {

            if (error.response) {
                console.log("Status do erro:", error.response.status);
                console.log("Dados do erro:", error.response.data);
            } else {
                
                console.error("Erro ao fazer a solicitação:", error.message);
            }
        }
    }

    return (
        <Container>
            <ScrollViewContent>

                <HeaderSub>
                    <Logo source={ImgHeader}>
                        <Message>Criar Ocorrência</Message>
                        <Header>Insira os seus dados</Header>
                    </Logo>
                </HeaderSub>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>TÍTULO</Label>
                                <TextInput
                                    name="title"
                                    placeholder="DIGITE O TÍTULO"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.title}
                                />
                            </>
                        )}
                        name="title"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>DESCRIÇÃO</Label>
                                <TextInput
                                    name="description"
                                    placeholder="ESCREVA UM BREVE RESUMO"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.description}
                                />
                            </>
                        )}
                        name="description"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>CATEGORIAS</Label>
                                <CategoryPicker
                                    control={control}
                                    value={value}
                                    onChange={onChange}
                                />
                            </>
                        )}
                        name="category"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>NÍVEL DE RISCO</Label>
                                <RiskLevelPicker
                                    control={control}
                                    value={value}
                                    onChange={onChange}
                                />
                            </>
                        )}
                        name="risk_level"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>STATUS</Label>
                                <StatusPicker
                                    control={control}
                                    value={value}
                                    onChange={onChange}

                                />
                            </>
                        )}
                        name="status"
                    />
                </InputContainer>

                {/* <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>FOTOGRAFIA DA OCORRÊNCIA</Label>
                                <ImagePicker
                                    onChange={onChange}
                                    value={value}
                                />
                                {errors.image && <ErrorText>{errors.image.message}</ErrorText>}
                            </>
                        )}
                        name="image"
                    />
                </InputContainer> */}

                <InputContainer>
                    <Label>LOCALIZAÇÃO</Label>
                    <LocalizationPicker />
                </InputContainer>

                <InputContainer>
                    <Button onPress={handleSubmit(onSubmit)}>
                        <ButtonText>Enviar</ButtonText>
                    </Button>
                    <Button onPress={() => navigation.goBack()}>
                        <ButtonText>Voltar</ButtonText>
                    </Button>
                </InputContainer>

            </ScrollViewContent>
        </Container>
    );
}