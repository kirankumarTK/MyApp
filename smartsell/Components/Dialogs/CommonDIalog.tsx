import React, {useEffect, useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import Appstlye from '../../AppThemes/Appstlye';
import {CommonDialogModel} from '../../models/commonModels';
import RadioButton from '../RadioButton';
import {getAsyncData} from '../../Commons/utilities';
import AysncKeys from '../../Commons/AsyncKeys';
const CommonDialog: React.FC<CommonDialogModel> = ({
  visible,
  title,
  msg,
  onClose,
  onConform,
  list,
  positiveBtnTxt,
  negativeBtnTxt,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    getAsyncData(AysncKeys.languageCode)
      .then(languageCode => {
        setSelectedId(languageCode);
      })
      .catch(error => {});
  }, []);
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={[Appstlye.style.dialog_bg]}>
        <View style={Appstlye.style.dialog}>
          <Text style={Appstlye.style.Drawer_Text_View}>{title}</Text>

          {msg.length > 0 && <Text>{msg}</Text>}

          {list.length > 0 && (
            <FlatList
              data={list}
              style={Appstlye.style.dialog_list}
              keyExtractor={(item, index) => item.ListCode}
              renderItem={({item}) => (
                <RadioButton
                  data={item}
                  selected={item.ListCode === selectedId}
                  onPress={() => setSelectedId(item.ListCode)}
                />
              )}
            />
          )}

          <View style={Appstlye.style.dialog_button_container}>
            <TouchableOpacity onPress={onClose}>
              <Text style={Appstlye.style.dialog_button_cancel}>
                {negativeBtnTxt}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onConform(selectedId)}>
              <Text style={Appstlye.style.dialog_button_ok}>
                {positiveBtnTxt}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommonDialog;
