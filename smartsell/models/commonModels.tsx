import {
  DrawerContentComponentProps,
  DrawerHeaderProps,
} from '@react-navigation/drawer';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {GeoPosition} from 'react-native-geolocation-service';

export interface HhtMenuMasterBO {
  HHTCode: string;
  Flag: number;
  RField: string;
  MName: string;
  MNumber: number;
  lang: string;
  MenuType: string;
}
export type DrawerNavigationModel = {
  homeMenuList: HhtMenuMasterBO[];
};

export interface HomeDrawerModel {
  props: DrawerContentComponentProps;
  homeMenuList: HhtMenuMasterBO[];
}

export interface HhtMenuMasterBOModel {
  item: HhtMenuMasterBO;
  props: DrawerContentComponentProps;
}

export interface LocationService {
  location: GeoPosition;
  id: number;
  msg: string;
}

export interface AppbarModel {
  props: DrawerHeaderProps;
}

export interface CommonDialogModel {
  visible: boolean;
  title: string;
  msg: string;
  list: Array<any>;
  onClose: () => void;
  onConform: (result: any | undefined) => void;
  positiveBtnTxt: string;
  negativeBtnTxt: string;
}

export interface LanguageModel {
  ListCode: string;
  ListName: string;
}
export interface RadioModel {
  selected: boolean;
  onPress: () => void;
  data: LanguageModel;
}

export interface MapviewComponentModel {
  mapStyle: StyleProp<ViewStyle>;
}

export interface RetailerMasterBO {
  RetailerID: string;
  RetailerName: string;
  Address1: string;
  Latitude: number;
  Longitude: number;
  TaskCount: number;
}

export interface RetailerMasterModel {
  retailerBo: RetailerMasterBO;
  kpiData: Array<PieValue>;
  onClick: (retailerBo: RetailerMasterBO) => void;
}
export interface PieChartBO {
  value: number;
  radius: number;
  progressValueColor: string;
  title: string;
  titleColor: string;
  titleStyle: TextStyle;
}

export interface PieValue {
  title: string;
  value: number;
}

export interface FabButtonModel {
  iconName: string;
  onClick: () => void;
}

export interface ToasModel {
  visible: any;
  message: string;
  duration: number;
  onClose: () => void;
}
