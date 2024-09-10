import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FabButtonModel} from '../models/commonModels';
import Appstlye from '../AppThemes/Appstlye';
const FabButton: React.FC<FabButtonModel> = ({iconName, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} style ={Appstlye.style.fabButton}>
      <Icon name={iconName} size={30} />
    </TouchableOpacity>
  );
};

export default FabButton;
