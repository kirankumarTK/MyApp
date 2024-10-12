import React from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import Appstlye from '../../AppThemes/Appstlye';
import {Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColor from '../../AppThemes/AppColor';
const CameraComponent = () => {
  const device = useCameraDevice('back');

  if (device == null) return <View />;
  else
    return (
      <View style={Appstlye.style.centerAlign}>
        <Camera
          style={Appstlye.style.camera}
          device={device}
          isActive={true}
          photo={true}
        />
        <Icon  name="circle-outline"  size={100} color={'#ddd'} style={Appstlye.style.cameraButton} />
        
      </View>
    );
};

export default CameraComponent;
