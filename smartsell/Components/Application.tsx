import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import MainNavigation from './Navigations/MainNavigation';
import {I18nextProvider} from 'react-i18next';
import translation from '../Commons/i18n';

const Application = () => {
  useEffect(() => {
    translation.initTranslation();
  }, []);
  return (
    <NavigationContainer>
      <I18nextProvider i18n={translation.initTranslation()}>
        <MainNavigation />
      </I18nextProvider>
    </NavigationContainer>
  );
};

export default Application;
