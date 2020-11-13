import React, { useState, useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Container, Divider } from '../../styles/global';
import { 
  Content, 
  ButtonWrapper,
  TopBar, 
  ProgressView, 
  ProgressCircle, 
  QuestionContainer, 
  Title
} from '../../styles/screens/investorProfile/main';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import InputText from '../../components/InputText';

function StepOne() {
  const theme = useContext(ThemeContext);

  const [income, setIncome] = useState('0');
  const navigation = useNavigation();

  const goToNextScreen = () => {
    const investorProfileInfo = { rendaMensal: income };
    
    navigation.navigate('StepTwo', { investorProfileInfo });
  }

  const handleChangeIncome = (name, value) => {
    setIncome(value);
  }

  return (
    <Container>
      <Content style={{paddingTop: 50}}>
        <TopBar>
          <ProgressView>
            <ProgressCircle active />
            <Divider active />
            <ProgressCircle />
            <Divider />
            <ProgressCircle />
            <Divider />
            <ProgressCircle />
          </ProgressView>
        </TopBar>
        <QuestionContainer>
            <Title style={{marginBottom: 10}}>Qual sua renda mensal em reais?</Title>
            <InputText 
              backgroundColor={theme.colors.backgroundPrimary}
              name="income"
              value={income}
              onChange={handleChangeIncome}
              hasBorderBottom
              borderColor={theme.colors.primary}
            />
          </QuestionContainer>
        <ButtonWrapper>
          <Button
            text="PRÓXIMO"
            primary
            onPress={goToNextScreen}
            disabled={isNaN(income) || income === ''}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}

export default StepOne;