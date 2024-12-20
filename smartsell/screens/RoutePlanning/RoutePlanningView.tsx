import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Switch, Text, View} from 'react-native';
import Appstlye from '../../AppThemes/Appstlye';
import MapviewComponent from '../../Components/MapviewComponent';
import StoreList from '../../Components/StoreList';
import {RoutePlanningViewModel} from './RoutePlanningViewModel';
import AppColor from '../../AppThemes/AppColor';
import FabButton from '../../Components/FabButton';
import ToastComponent from '../../Components/ToastComponent';
const RoutePlanningView = () => {
  const {
    retailerMasters,
    getCurrentDate,
    isEnabled,
    toggleSwitch,
    data,
    fabOnClick,
    handleToastClose,
    toastVisible,
    onRetailerListClick
  } = RoutePlanningViewModel();
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
            trackColor={{
              false: AppColor.shadowcolor,
              true: AppColor.secondaryColor,
            }}
            thumbColor={isEnabled ? AppColor.secondaryColor : AppColor.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      {isEnabled && <MapviewComponent mapStyle={Appstlye.style.map} />}

      <FlatList
        data={retailerMasters}
        style={Appstlye.style.storeList}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        initialNumToRender={5}
        keyExtractor={(item, index) => item.RetailerID}
        renderItem={({item}) => <StoreList retailerBo={item} kpiData={data}  onClick={onRetailerListClick}/>}
      />

      <FabButton iconName="plus" onClick={fabOnClick} />
      <ToastComponent message={'Fab button clicked'} onClose={handleToastClose} visible={toastVisible} duration={3000}/>
    </React.Fragment>
  );
};

export default RoutePlanningView;
