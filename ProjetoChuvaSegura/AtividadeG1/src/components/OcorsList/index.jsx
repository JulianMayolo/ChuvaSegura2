import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import {
  Botao,
  Card,
  ContainerMain,
  TitleLineOne,
  DateCard,
  Description,
  ContainerDescription,
  ContainerLabels,
  Labels,
  ButtonStatus,
  ButtonText,
} from './styles';

export default function OcorsList({ data }) {
  const navigation = useNavigation();
  const ocorDate = new Date(data.created_at);

  function handleDetails() {
    navigation.navigate("DetailsOcors", { data: data.id });
  }

  function riskLevelString(riskLevel) {
    switch (riskLevel) {
      case 1:
        return 'Baixo';
      case 2:
        return 'Médio';
      case 3:
        return 'Moderado';
      case 4:
        return 'Alto';
      case 5:
        return 'Perigo';
      default:
        return 'Nível Desconhecido';
    }
  }

  return (
    <Card>
      <ContainerMain>
        <TitleLineOne>{data.title}</TitleLineOne>
        <DateCard>{format(ocorDate, 'dd/MM/yyyy')}</DateCard>
      </ContainerMain>

      <ContainerDescription>
        <Description>
          {data.description}
        </Description>
      </ContainerDescription>

      <ContainerLabels>
        <Labels>Categorias</Labels>
        <Labels>Nível de risco</Labels>
        <Labels>Status</Labels>
      </ContainerLabels>

      <ContainerLabels>
        <ButtonStatus>
          <ButtonText>{data.category.toUpperCase()}</ButtonText>
        </ButtonStatus>
        <ButtonStatus>
          <ButtonText>{riskLevelString(data.risk_level).toUpperCase()}</ButtonText>
        </ButtonStatus>
        <ButtonStatus>
          <ButtonText>{data.status.toUpperCase()}</ButtonText>
        </ButtonStatus>
      </ContainerLabels>

      <ContainerLabels></ContainerLabels>
      <ContainerLabels>
        <Labels>Cidade: </Labels>
      </ContainerLabels>

      <Botao onPress={handleDetails}>
        <ButtonText>Ver detalhes</ButtonText>
      </Botao>

    </Card>
  );
}
