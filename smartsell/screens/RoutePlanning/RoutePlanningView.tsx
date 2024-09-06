import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Switch, Text, View } from 'react-native';
import Appstlye from '../../AppThemes/Appstlye';
import MapviewComponent from '../../Components/MapviewComponent';
import StoreList from '../../Components/StoreList';
import { RoutePlanningViewModel } from './RoutePlanningViewModel';
import AppColor from '../../AppThemes/AppColor';
const RoutePlanningView = () => {
  const {retailerMasters, getCurrentDate, isEnabled, toggleSwitch} =
    RoutePlanningViewModel();
  const {t} = useTranslation();

  return (
    <React.Fragment>
      <View
        style={[
          Appstlye.style.padding_default,
          Appstlye.style.todayRouteSwitchContainer,
        ]}>
        <View style={Appstlye.style.retailer_details_view}>
          <Text style={Appstlye.style.Drawer_Text_View}>
            {t('today') + ' ' + getCurrentDate()}
          </Text>
          <Text style={Appstlye.style.app_small_text_gray}>
            {t('store_visit')}
          </Text>
        </View>
        <View style={Appstlye.style.retailer_score_view}>
          <Switch
            trackColor={{false: AppColor.shadowcolor, true: AppColor.secondaryColor}}
            thumbColor={isEnabled ? AppColor.secondaryColor : AppColor.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      {isEnabled && <MapviewComponent mapStyle={Appstlye.style.map} /> }
      <FlatList
        data={retailerMasters}
        style={Appstlye.style.storeList}
        renderItem={({item}) => <StoreList retailerBo={item} />}
      />
    </React.Fragment>
  );
};

export default RoutePlanningView;
