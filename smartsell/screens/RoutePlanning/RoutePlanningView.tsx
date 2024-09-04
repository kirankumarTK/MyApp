import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Appstlye from '../../AppThemes/Appstlye';
import { useAppSelector } from '../../redux/hooks';
const RoutePlanningView = () => {
  const selectedLanguage = useAppSelector(
    state => state.languageSlice.languageCode,
  );
  return (
    <React.Fragment>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={Appstlye.style.map}
        region={{
          latitude: 37.78826,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </React.Fragment>
  );
};

export default RoutePlanningView;
