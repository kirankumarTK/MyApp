import React from 'react';
import {View} from 'react-native';
import Appstlye from '../AppThemes/Appstlye';
import {Text} from 'react-native';
import {RetailerMasterModel} from '../models/commonModels';

const StoreList: React.FC<RetailerMasterModel> = ({retailerBo}) => {
  return (
    <View style={Appstlye.style.list_item}>
      <View style={Appstlye.style.retailer_details_view}>
        <Text style={Appstlye.style.Store_Name}>{retailerBo.RetailerName}</Text>
        <Text
          style={[Appstlye.style.app_small_text, Appstlye.style.margin_top]}>
          Open task count : {retailerBo.TaskCount}
        </Text>
      </View>
      <View style={Appstlye.style.retailer_score_view}>
        <Text >
            Need load pie chart 
        </Text>
      </View>
    </View>
  );
};

export default StoreList;
