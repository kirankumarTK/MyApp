import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppbarModel} from '../../models/commonModels';
import Appstlye from '../../AppThemes/Appstlye';
import AppColor from '../../AppThemes/AppColor';

const Appbar: React.FC<AppbarModel> = props => {
  return (
    <View style={Appstlye.style.AppBar_view}>
      <Icon
        name="menu"
        size={Appstlye.appIconsize}
        color={AppColor.white}
        style = {Appstlye.style.absolute_start}
        onPress={() => props.props.navigation.openDrawer()}
      />
      <Text style={Appstlye.style.title_view}>{props.props.route.name}</Text>
    </View>
  );
};

export default Appbar;
