import React, { useState } from 'react';

import { Container, Divider } from '../../styles/global';
import {
  Content,
  ButtonWrapper,
  ProgressView,
  ProgressCircle,
  QuestionContainer,
  Title,
  TopBar,
  OptionsContainer,
  OptionWrapper
} from '../../styles/screens/investorProfile/main';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

function StepTwo({ route }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const goToNextScreen = () => {
    if (selectedOption === 0) {
      const investorProfileInfo = { ...route.params.rendaMensal, jaInvestiu: true };

      navigation.navigate('StepThree', { investorProfileInfo });
    }

    // Todo -> go to homescreen if 2
    navigation.navigate('Finish');
  }

  const handleChangeSelectedOption = (option) => {
    setSelectedOption(option);
  }

  const phrases = [
    'Sim',
    'Não'
  ];

  return (
    <Container>
      <Content>
        <TopBar>
          <ProgressView>
            <ProgressCircle active />
            <Divider active />
            <ProgressCircle active />
            <Divider active />
            <ProgressCircle />
            <Divider />
            <ProgressCircle />
          </ProgressView>
        </TopBar>
        <QuestionContainer>
          <Title style={{ marginBottom: 10 }}>Você já investiu alguma vez?</Title>
          <OptionsContainer>
            <OptionWrapper>
              <Button
                text={phrases[0]}
                primary={selectedOption === 0}
                onPress={() => handleChangeSelectedOption(0)}
              />
            </OptionWrapper>

            <OptionWrapper>
              <Button
                text={phrases[1]}
                primary={selectedOption === 1}
                onPress={() => handleChangeSelectedOption(1)}
              />
            </OptionWrapper>
          </OptionsContainer>
        </QuestionContainer>
        <ButtonWrapper>
          <Button
            text="PRÓXIMO"
            primary
            onPress={goToNextScreen}
            disabled={!phrases[selectedOption]}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}

export default StepTwo;