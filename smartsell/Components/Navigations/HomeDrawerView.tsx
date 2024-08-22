import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Appstlye from '../../AppThemes/Appstlye';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  HhtMenuMasterBO,
  HhtMenuMasterBOModel,
  HomeDrawerModel,
} from '../../models/commonModels';
import AppColor from '../../AppThemes/AppColor';
import { MENU_DASH_KPI, MENU_PLANNING, MENU_POSM_AST, MENU_SURVEY_SW, MENU_SYNC, MENU_TASK_NEW, MENU_VISIT } from '../../Commons/utilities';

const HomeDrawerView: React.FC<HomeDrawerModel> = ({props, homeMenuList}) => {
  return (
    <React.Fragment>
      <View style={Appstlye.style.DrawerProfile_BG}></View>
      <FlatList
        data={homeMenuList}
        renderItem={({item, index}) => <MenuView item={item} props={props}  />}></FlatList>
    </React.Fragment>
  );
};

const MenuView: React.FC<HhtMenuMasterBOModel> = ({item,props}) => {
  return (
    <TouchableOpacity style={Appstlye.style.Drawer_View} onPress={() => props.navigation.navigate(item.HHTCode)} >
      <Icon
        name={getIcon(item.HHTCode)}
        size={Appstlye.appIconsize}
        color={AppColor.textColor}
        style={Appstlye.style.Drawer_Icon}
      />
      <Text style={Appstlye.style.Drawer_Text_View}>{item.MName}</Text>
    </TouchableOpacity>
  );
};

const getIcon = (menuName: string) => {
  switch (menuName) {
    case MENU_DASH_KPI:
      return 'view-dashboard';
    case MENU_SURVEY_SW:
      return 'note-edit';
    case MENU_TASK_NEW:
      return 'note-alert';
    case MENU_PLANNING:
      return 'store-clock';
    case MENU_VISIT:
      return 'store';
    case MENU_SYNC:
      return 'sync';
    case MENU_POSM_AST:
      return 'washing-machine';
    default:
      return 'access-point';
  }
};
export default HomeDrawerView;
