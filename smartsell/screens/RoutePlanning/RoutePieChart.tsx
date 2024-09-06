import React from 'react';
import PieChartComponent from '../../Components/Chart/PieChartComponent';
import AppColor from '../../AppThemes/AppColor';
import {View} from 'react-native';
import { PieValue } from '../../models/commonModels';
const RoutePieChart: React.FC<PieValue> = React.memo(({title,value}) => {
  return (
    <View
      style={{
        marginStart: 5,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <PieChartComponent
        progressValueColor={value > 50 ? AppColor.secondaryColor : AppColor.red }
        radius={30}
        title={title}
        titleColor={AppColor.textColor}
        titleStyle={{fontSize: 10}}
        value={value}
      />
    </View>
  );
});

export default RoutePieChart;
