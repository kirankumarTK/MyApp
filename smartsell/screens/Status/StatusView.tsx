import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { getLocation, requestLocationPermission, showAlert } from '../../Commons/utilities';
import { PERMISSIONS } from 'react-native-permissions';
import { Location } from 'react-native-get-location';
import { useFocusEffect } from '@react-navigation/native';
const StatusView = () => {
  const [location, setLocation] = useState<Location>();
  let timerID: any;


  function callLocation() {
    requestLocationPermission(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, 'Location').then(response => {
      setTimer();
    }).catch(error => {
      console.log(error);
      showAlert('Permission required', error, 'ok');
    })
  }

  const setTimer = () => {
    const id = setInterval(() => {
      getLocation(2000).then(result => {
        setLocation(result as Location);
        console.log(result);

      }).catch(e => {
        console.log(e);
      })
    }, 5000);
    console.log(id);
    timerID = id;
  }
  //to identify screen is visible to user 
  useFocusEffect(
    useCallback(() => {
      //Screen is focused
      callLocation();
      return () => {
        // Screen is unfocused
        clearInterval(timerID);
      };
    }, [])
  );


  return (
    <React.Fragment>
      <Text>{location?.accuracy}</Text>
    </React.Fragment>
  );
};

export default StatusView;
