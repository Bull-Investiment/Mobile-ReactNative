import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import defineInvestorProfile from '../../util/defineInvestorProfile';

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


function Finish({ route }) {
  const [profile, setProfile] = useState(null);
  const { setUserHasInvestorInfo } = useAuth();

  useEffect(() => {
    const answers = route.params.investorProfileInfo;

    setProfile(defineInvestorProfile.rating(answers));
    // API CALL - edit user
  }, [route.params.investorProfileInfo, setProfile]);

  const finishSetup = () => {
    setUserHasInvestorInfo(true);
  }

  if (!profile) {
    return <Container />
  };

  return (
    <Container>
      <ScrollView>
        <Content>
          <EmptyView />
          {icons[profile]()}
          <View>
            <Title>Você é um investidor {profile}</Title>
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
      </ScrollView>
    </Container>
  )
}

export default Finish;