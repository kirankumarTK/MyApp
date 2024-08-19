import {useEffect, useState} from 'react';
import {HhtMenuMasterBO} from '../../models/commonModels';
import AppDatabase from '../../Commons/DataBaseHelper';
import {showAlert} from '../../Commons/utilities';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackPramsList} from '../../Components/Navigations/RootStackPramsList';

export const HomeViewModel = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackPramsList, 'Home'>>();

  const [homeMenuList, setMenulist] = useState(Array<HhtMenuMasterBO>());

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      return;
    });
    setMenulist(getHomeMenuList);
  }, []);

  const getHomeMenuList = () => {
    const homeMenuList: Array<HhtMenuMasterBO> = [];
    let query = "Select * from HhtMenuMaster where MenuType = 'HOME_MENU'";
    AppDatabase.executeFetch(query)
      .then((result: Array<HhtMenuMasterBO>) => {
        setMenulist(result);
      })
      .catch(error => {
        showAlert('Error', 'Menu Not Mapped', 'ok');
      });
    return homeMenuList;
  };
  return {homeMenuList};
};
