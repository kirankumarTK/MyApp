import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieValue} from '../../models/commonModels';
import Svg, {Circle} from 'react-native-svg';

const RoutePieChart: React.FC<PieValue> = React.memo(({title, value}) => {
  const circumference = 2 * Math.PI * 30;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (circumference * value) / 100;
  const radius = 25;
  const strokeWidth = 5;

  return (
    <View style={styles.container}>
      <Svg height={radius * 2 + strokeWidth} width={radius * 2 + strokeWidth}>
        <Circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke="#ddd"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke={value >= 50 ? '#4CAF50' : '#db3d4b'}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          originX={radius + strokeWidth / 2}
          originY={radius + strokeWidth / 2}
        />
      </Svg>
      <Text style={[styles.text,{color: value >= 50 ? '#4CAF50' : '#db3d4b'}]}>
        {value}% {'\n'}
        {title}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 10,
  },
  text: {
    position: 'absolute',
    marginTop: 5,
  },
});

export default RoutePieChart;
