import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Appstlye from '../AppThemes/Appstlye';
import {PieValue, RetailerMasterModel} from '../models/commonModels';
import RoutePieChart from '../screens/RoutePlanning/RoutePieChart';

const StoreList: React.FC<RetailerMasterModel> = React.memo(({retailerBo}) => {
  const data : Array<PieValue> = [{title: 'VGP', value: 50}, {title: 'DGP', value: 10},{title: 'IGP', value: 50},{title: 'OOS', value: 70}] ;
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {data.map((value,index) => {
              return <RoutePieChart key={index}  title= {value.title} value={value.value}/>;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
});

export default StoreList;
