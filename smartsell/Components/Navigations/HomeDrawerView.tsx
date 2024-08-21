import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Appstlye from '../../AppThemes/Appstlye';
import {
  HhtMenuMasterBO,
  HhtMenuMasterBOModel,
  HomeDrawerModel,
} from '../../models/commonModels';

const HomeDrawerView: React.FC<HomeDrawerModel> = ({props, homeMenuList}) => {
  return (
    <React.Fragment>
      <View style={Appstlye.style.DrawerProfile_BG}></View>
      <FlatList
        data={homeMenuList}
        renderItem={({item, index}) => <MenuView item={item} />}></FlatList>
    </React.Fragment>
  );
};

const MenuView: React.FC<HhtMenuMasterBOModel> = ({item}) => {
  return (
    <TouchableOpacity style={Appstlye.style.Drawer_View}>
      <Text style={Appstlye.style.Drawer_Text_View}>{item.MName}</Text>
    </TouchableOpacity>
  );
};
export default HomeDrawerView;
