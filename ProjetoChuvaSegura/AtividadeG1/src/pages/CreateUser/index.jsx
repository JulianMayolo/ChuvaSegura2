import React, { useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from '@react-navigation/native'
import ImgHeader from '../../assets/header.jpeg'
import DatePicker from "../../components/DatePicker";
import TextInput from "../../components/TextInput";
import { createUserSchema } from '../../utils/createUserValidation';
import { format } from 'date-fns';
import api from '../../services/api';
import { Container, ErrorText, Header, InputContainer, Label, ScrollViewContent, Button, ButtonText, Link, LinkText } from './styles';
import { HeaderSub, Message, Logo } from '../CreateOcors/styles';
import { ModalBackground, ModalButton, ModalButtonText, ModalContainer, ModalContent, ModalText } from '../DetailsOcors/styles';

export default function App() {
    const navigation = useNavigation();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);

    const styles = StyleSheet.create({
        blueText: {
            color: '#68B2F8',
        },
    });

    const ClickOk = () => {
        navigation.navigate('SignIn');
    };

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            cpf: "",
            birth_date: new Date(),
            city: "",
            password: "",
        },
        resolver: yupResolver(createUserSchema),
    });

    const onSubmit = async (data) => {
        Keyboard.dismiss();
        try {
            const birthDate = format(new Date(data.birth_date), 'yyyy-MM-dd');

            const dataApi = {
                name: data.name,
                email: data.email.toLowerCase(),
                cpf: data.cpf,
                birth_date: birthDate,
                city: data.city,
                password: data.password,
            };

            await api.post('/users', dataApi);
            setConfirmationModalVisible(true);
            reset({
                name: "",
                email: "",
                cpf: "",
                birth_date: new Date(),
                city: "",
            });

        } catch (error) {

            console.error("Erro ao enviar dados:", error.message);
        }
    }

    return (
        <Container>
            <ScrollViewContent>
                <HeaderSub>
                    <Logo source={ImgHeader}>
                        <Message>Criar Conta</Message>
                        <Header>Insira os seus dados</Header>
                    </Logo>
                </HeaderSub>
                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>NOME COMPLETO</Label>
                                <TextInput
                                    name="name"
                                    placeholder="Nome"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.name}
                                />
                            </>
                        )}
                        name="name"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>E-MAIL</Label>
                                <TextInput
                                    name="email"
                                    placeholder="E-mail"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.email}
                                />
                            </>
                        )}
                        name="email"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>CPF</Label>
                                <TextInput
                                    name="cpf"
                                    placeholder="CPF"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.cpf}
                                    keyboardType="numeric"
                                />
                            </>
                        )}
                        name="cpf"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>DATA DE NASCIMENTO</Label>
                                <DatePicker
                                    value={value}
                                    onChange={onChange}
                                    showPicker={showDatePicker}
                                    setShowPicker={setShowDatePicker}
                                />
                                {errors.birth_date && <ErrorText>{errors.birth_date.message}</ErrorText>}
                            </>
                        )}
                        name="birth_date"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>CIDADE</Label>
                                <TextInput
                                    name="city"
                                    placeholder="Digite sua cidade"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.city}
                                />
                            </>
                        )}
                        name="city"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>SENHA</Label>
                                <TextInput
                                    name="password"
                                    placeholder="Senha"
                                    onChange={onChange}
                                    value={value}
                                    secureTextEntry={true}
                                    error={errors.password}
                                />
                            </>
                        )}
                        name="password"
                    />
                </InputContainer>

                <InputContainer>
                    <Button onPress={handleSubmit(onSubmit)}>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>
                    <Link onPress={() => navigation.goBack()}>
                        <LinkText> Já possui uma conta?
                            <LinkText style={styles.blueText}> Login </LinkText>
                        </LinkText>
                    </Link>
                </InputContainer>

                <ModalContainer
                    visible={isConfirmationModalVisible}
                    transparent={true}
                    animationType="slide"
                >
                    <ModalBackground>
                        <ModalContent>
                            <ModalText>Cadastro realizado com sucesso!</ModalText>
                            <ModalButton onPress={ClickOk}>
                                <ModalButtonText>Ok</ModalButtonText>
                            </ModalButton>
                        </ModalContent>
                    </ModalBackground>
                </ModalContainer>

            </ScrollViewContent>
        </Container>
    );
}