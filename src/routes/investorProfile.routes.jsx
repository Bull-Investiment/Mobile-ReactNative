import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Information from '../screens/investorProfile/Information';
import StepOne from '../screens/investorProfile/StepOne';
import StepTwo from '../screens/investorProfile/StepTwo';
import StepThree from '../screens/investorProfile/StepThree';
import StepFour from '../screens/investorProfile/StepFour';
import Finish from '../screens/investorProfile/Finish';

const { Navigator, Screen } = createStackNavigator();


function InvestorProfile() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="StepZero" component={Information} />

      <Screen name="StepOne" component={StepOne} />

      <Screen
        name="StepTwo"
        component={StepTwo}
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title=""
            />
          )
        }}
      />

      <Screen
        name="StepThree"
        component={StepThree}
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title=""
            />
          )
        }}
      />

      <Screen
        name="StepFour"
        component={StepFour}
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title=""
            />
          )
        }}
      />

      <Screen
        name="Finish"
        component={Finish}
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title="Analise de perfil concluída!"
              hasBackButton={false}
            />
          )
        }}
      />

    </Navigator>
  );
}

export default InvestorProfile;