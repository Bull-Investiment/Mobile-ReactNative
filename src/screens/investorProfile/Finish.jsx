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

import phrases from '../../util/phrases';
import api from '../../services/api';

const icons = {
  Aprendiz: () => <IconeAprendiz width={'100%'} height={'210'} />,
  Conservador: () => <IconeConservador width={'100%'} height={'210'} />,
  Moderado: () => <IconeModerado width={'100%'} height={'210'} />,
  Arrojado: () => <IconeArrojado width={'100%'} height={'210'} />,
  Expert: () => <IconeExpert width={'100%'} height={'210'} />,
}


function Finish({ route }) {
  const [profile, setProfile] = useState(null);
  const { user, setUserHasInvestorInfo } = useAuth();

  useEffect(() => {
    async function setInvestorProfile() {
      const answers = route.params.investorProfileInfo;
      
      const type = defineInvestorProfile.rating(answers);
      
      try {
        setProfile(type);
        await api.put(`/users/${user.id}`, { type });
      } catch (err) {
        console.log(err);
      }
    }

    setInvestorProfile();
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
            <SubText small>{phrases.investmentProfile[profile]}</SubText>
          </View>
          <ButtonWrapper>
            <Button
              text="VAMOS COMEÇAR!"
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