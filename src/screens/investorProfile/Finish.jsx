import React from 'react';
import { View } from 'react-native';

import { Container, EmptyView } from '../../styles/global';
import { Content, ButtonWrapper } from '../../styles/screens/investorProfile/main';
import { SubText, Title } from '../../styles/screens/investorProfile/information';

import IconeAprendiz from '../../assets/illustrations/aprendiz';
import IconeConservador from '../../assets/illustrations/conservador';
import IconeModerado from '../../assets/illustrations/moderado';
import IconeArrojado from '../../assets/illustrations/arrojado';
import IconeExpert from '../../assets/illustrations/expert';

import Button from '../../components/Button';

import { useAuth } from '../../contexts/auth';

const icons = {
  Aprendiz: () => <IconeAprendiz width={'100%'} height={'210'} />,
  Conservador: () => <IconeConservador width={'100%'} height={'210'} />,
  Moderado: () => <IconeModerado width={'100%'} height={'210'} />,
  Arrojado: () => <IconeArrojado width={'100%'} height={'210'} />,
  Expert: () => <IconeExpert width={'100%'} height={'210'} />,
}

function Finish() {
  const { setUserHasInvestorInfo } = useAuth();

  const finishSetup = () => {
    setUserHasInvestorInfo(true);
  }

  return (
    <Container>
      <Content>
        <EmptyView />
        {icons.Expert()}
        <View>
          <Title>Você é um investidor expert!</Title>
          <SubText small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit nulla sed interdum dictum. Nulla rutrum tempor massa vitae sollicitudin. Sed ornare fermentum lectus, a efficitur magna. Donec lobortis eu tellus a sodales. Nullam velit libero, dictum ut quam eu, finibus imperdiet metus. Curabitur ut risus vel mauris rutrum rhoncus vel quis felis. Proin cursus ornare scelerisque. Vivamus congue mi eu dapibus commodo. Nulla ut vulputate elit, non lacinia augue. Morbi sagittis tincidunt quam.</SubText>
        </View>
        <ButtonWrapper>
          <Button
            text="FINALIZAR"
            primary
            onPress={finishSetup}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}

export default Finish;