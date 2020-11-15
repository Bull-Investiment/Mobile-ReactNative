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

function StepTwo({ route }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const goToNextScreen = () => {
    if (selectedOption === 0) {
      const investorProfileInfo = { ...route.params.first, second: true };

      navigation.navigate('StepThree', { investorProfileInfo });
    } else {
      // Todo -> go to homescreen if 1
      const investorProfileInfo = { ...route.params.first, second: false };

      navigation.navigate('Finish', { investorProfileInfo });
    }

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
                text={phrases.questions.stepTwo[0]}
                primary={selectedOption === 0}
                onPress={() => handleChangeSelectedOption(0)}
              />
            </OptionWrapper>

            <OptionWrapper>
              <Button
                text={phrases.questions.stepTwo[1]}
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
            disabled={!phrases.questions.stepTwo[selectedOption]}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}

export default StepTwo;