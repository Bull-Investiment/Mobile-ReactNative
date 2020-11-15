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

import phrases from '../../util/phrases';

function StepThree({ route }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const goToNextScreen = () => {
    const investorProfileInfo = { ...route.params.investorProfileInfo, third: phrases.questions.stepThree[selectedOption] };

    navigation.navigate('StepFour', { investorProfileInfo });
  }

  const handleChangeSelectedOption = (option) => {
    setSelectedOption(option);
  }

  return (
    <Container>
      <Content>
        <TopBar>
          <ProgressView>
            <ProgressCircle active />
            <Divider active />
            <ProgressCircle active />
            <Divider active />
            <ProgressCircle active />
            <Divider active />
            <ProgressCircle />
          </ProgressView>
        </TopBar>
        <QuestionContainer>
          <Title style={{ marginBottom: 10 }}>Selecione a frase que melhor te define: </Title>
          <OptionsContainer>
            <OptionWrapper>
              <Button
                text={phrases.questions.stepThree[0]}
                primary={selectedOption === 0}
                onPress={() => handleChangeSelectedOption(0)}
              />
            </OptionWrapper>

            <OptionWrapper>
              <Button
                text={phrases.questions.stepThree[1]}
                primary={selectedOption === 1}
                onPress={() => handleChangeSelectedOption(1)}
              />
            </OptionWrapper>
            <OptionWrapper>
              <Button
                text={phrases.questions.stepThree[2]}
                primary={selectedOption === 2}
                onPress={() => handleChangeSelectedOption(2)}
              />
            </OptionWrapper>
          </OptionsContainer>
        </QuestionContainer>
        <ButtonWrapper>
          <Button
            text="PRÓXIMO"
            primary
            onPress={goToNextScreen}
            disabled={!phrases.questions.stepThree[selectedOption]}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}

export default StepThree;