import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Text} from 'react-native';
import {GeoPosition} from 'react-native-geolocation-service';
import {PERMISSIONS} from 'react-native-permissions';
import Appstlye from '../../AppThemes/Appstlye';
import {
  clearGeoWatcher,
  getLocationListener,
  requestLocationPermission,
  showAlert,
} from '../../Commons/utilities';
import {LocationService} from '../../models/commonModels';
const StatusView = () => {
  const [location, setLocation] = useState<GeoPosition>();
  let watchId: number;

  function callLocation() {
    requestLocationPermission(
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      'Location',
    )
      .then(response => {
        getCurrentLocation();
      })
      .catch(error => {
        console.log(error);
        showAlert('Permission required', error, 'ok');
      });
  }

  const getCurrentLocation = () => {
    getLocationListener(1000)
      .then(geoLocation => {
        const position = geoLocation as LocationService;
        setLocation(position.location);
        watchId = position.id;
      })
      .catch(error => {
        let msg: string;
        if (typeof error !== 'string') {
          const position = error as LocationService;
          msg = position.msg;
          watchId = position.id;
        } else {
          msg = error;
        }
        showAlert(
          'Location Alert',
          msg,
          '',
          '',
          '',
          undefined,
          undefined,
          undefined,
          false,
        );
      });
  };
  //to identify screen is visible to user
  useFocusEffect(
    useCallback(() => {
      //Screen is focused
      callLocation();
      return () => {
        // Screen is unfocused
        clearGeoWatcher(watchId);
      };
    }, []),
  );

  return (
    <React.Fragment>
      <Text style={Appstlye.style.Drawer_Text_View}>
        {location?.coords.latitude}
      </Text>
    </React.Fragment>
  );
};

export default StatusView;
