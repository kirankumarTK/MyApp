import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Appstlye from '../AppThemes/Appstlye';
import { RetailerMasterModel } from '../models/commonModels';
import RoutePieChart from './Chart/RoutePieChart';

const StoreList: React.FC<RetailerMasterModel> = React.memo(
  ({ retailerBo, kpiData, onClick }) => {
    return (
      <TouchableOpacity onPress={() => onClick(retailerBo)}>
        <View style={Appstlye.style.list_item}>
          <View style={Appstlye.style.retailer_details_view}>
            <Text style={Appstlye.style.Store_Name}>
              {retailerBo.RetailerName}
            </Text>
            <Text
              style={[
                Appstlye.style.app_small_text,
                Appstlye.style.margin_top,
              ]}>
              Open task count : {retailerBo.TaskCount}
            </Text>
          </View>
          <View style={Appstlye.style.retailer_score_view}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row' }} onStartShouldSetResponder={() => true}>
                {kpiData.map((value, index) => {
                  return (
                    <RoutePieChart
                      key={index}
                      title={value.title}
                      value={value.value}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);
export default StoreList;
