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

function StepFour({ route }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const goToNextScreen = () => {
    const investorProfileInfo = { ...route.params.investorProfileInfo, fourth: phrases.questions.stepFour[selectedOption] };

    // Todo --> api logic to get the investor level
    navigation.navigate('Finish', { investorProfileInfo });
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
            <ProgressCircle active />
          </ProgressView>
        </TopBar>
        <QuestionContainer>
          <Title style={{ marginBottom: 10 }}>Há quanto tempo você investe? </Title>
          <OptionsContainer>
            <OptionWrapper>
              <Button
                text={phrases.questions.stepFour[0]}
                primary={selectedOption === 0}
                onPress={() => handleChangeSelectedOption(0)}
              />
            </OptionWrapper>

            <OptionWrapper>
              <Button
                text={phrases.questions.stepFour[1]}
                primary={selectedOption === 1}
                onPress={() => handleChangeSelectedOption(1)}
              />
            </OptionWrapper>

            <OptionWrapper>
              <Button
                text={phrases.questions.stepFour[2]}
                primary={selectedOption === 2}
                onPress={() => handleChangeSelectedOption(2)}
              />
            </OptionWrapper>
            
            <OptionWrapper>
              <Button
                text={phrases.questions.stepFour[3]}
                primary={selectedOption === 3}
                onPress={() => handleChangeSelectedOption(3)}
              />
            </OptionWrapper>
          </OptionsContainer>
        </QuestionContainer>
        <ButtonWrapper>
          <Button
            text="PRÓXIMO"
            primary
            onPress={goToNextScreen}
            disabled={!phrases.questions.stepFour[selectedOption]}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}

export default StepFour;