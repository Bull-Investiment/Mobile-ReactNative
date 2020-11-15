import React from 'react';
import { FlatList } from 'react-native';

import { Container } from '../../styles/global';

import { Content } from '../../styles/screens/home/main';

import {
  Title,
  InvestTitle,
  ItemContainer,
  ItemTitle,
  ItemSubTitle,
  SubView,
  TopView,
  MidView,
  BottomView,
  Bold
} from '../../styles/screens/invest/details';

const DATA = [
  {
    id: 1,
    banco: 'Banco Máxima',
    titulo: 'CDB',
    rentabilidade: '4,50',
    valorMinimo: '1066,69',
    vencimento: '19/10/2026'
  },
  {
    id: 2,
    banco: 'Banco RNX S/A',
    titulo: 'CDB',
    rentabilidade: '7,35',
    valorMinimo: '1233,63',
    vencimento: '20/12/2026'
  },
  {
    id: 3,
    banco: 'Banco Arbi',
    titulo: 'CDB',
    rentabilidade: '3,85',
    valorMinimo: '1077,84',
    vencimento: '14/08/2024'
  },
];

const Item = ({ banco, titulo, rentabilidade, valorMinimo, vencimento }) => (
  <ItemContainer>
    <TopView>
      <ItemTitle style={{ marginLeft: -5 }}>{banco}</ItemTitle>
      <ItemSubTitle style={{ paddingLeft: 10 }}>{titulo}</ItemSubTitle>
    </TopView>

    <MidView>
      <SubView>
        <ItemSubTitle>Rentabilidade</ItemSubTitle>
        <ItemTitle>{rentabilidade}%</ItemTitle>
      </SubView>

      <SubView style={{ marginLeft: 25 }}>
        <ItemSubTitle>Valor Mínimo</ItemSubTitle>
        <ItemTitle>R${valorMinimo}</ItemTitle>
      </SubView>
    </MidView>

    <BottomView>
      <ItemSubTitle>Vencimento em: {vencimento}</ItemSubTitle>
    </BottomView>

  </ItemContainer>
)

function Details({ route }) {
  const renderItem = ({ item }) => {
    const { banco, titulo, rentabilidade, valorMinimo, vencimento } = item;
    return (
      <Item
        banco={banco}
        titulo={titulo}
        rentabilidade={rentabilidade}
        valorMinimo={valorMinimo}
        vencimento={vencimento}
      />
    )
  }

  return (
    <Container>
      <Content style={{ paddingRight: 35, paddingLeft: 35, flex: 1 }}>
        <Title><Bold>{route.params.name}</Bold> é para quem quer ter oportunidades de retornos superiores ao Governo Federal mas quer continuar a ter segurança sobre as perdas </Title>

        <InvestTitle>INVESTIMENTOS</InvestTitle>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}-${item.title}}`}
        />

      </Content>
    </Container>
  );
}

export default Details;