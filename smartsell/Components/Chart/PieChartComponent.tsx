import React from 'react';
import {View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {PieChartBO} from '../../models/commonModels';

const PieChartComponent: React.FC<PieChartBO> = React.memo(({
  value,
  radius,
  title,
  titleColor,
  titleStyle,
  progressValueColor,
}) => {
  return (
    <View>
      <CircularProgress
        value={value}
        radius={radius}
        activeStrokeColor={progressValueColor}
        progressValueColor={progressValueColor}
        maxValue={100}
        duration={0}
        title={title}
        titleColor={titleColor}
        titleStyle={titleStyle}
      />
    </View>
  );
});

export default React.memo(PieChartComponent);
