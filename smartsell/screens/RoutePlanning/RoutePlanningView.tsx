import React from 'react';
import {Text} from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import Appstlye from '../../AppThemes/Appstlye';
const RoutePlanningView = () => {
  const selectedLanguage = useAppSelector(
    state => state.languageSlice.languageCode,
  );
  return (
    <React.Fragment>
      <Text style={Appstlye.style.Drawer_Text_View}>Planning  {selectedLanguage}</Text>
    </React.Fragment>
  );
};

export default RoutePlanningView;
