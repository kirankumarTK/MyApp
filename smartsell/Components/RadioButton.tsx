import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppColor from '../AppThemes/AppColor';
import {RadioModel} from '../models/commonModels';

const RadioButton: React.FC<RadioModel> = ({selected, onPress, data}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress()}>
        <View style={[styles.circle, selected && styles.selectedCircle]} />
      </TouchableOpacity>
      <Text style={styles.label}>{data.ListName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    backgroundColor: AppColor.shadowcolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    backgroundColor: AppColor.primaryColor,
    borderColor: AppColor.white,
  },
  label: {
    fontSize: 16,
    color: AppColor.textColor,
  },
});
export default RadioButton;
