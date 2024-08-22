import { DrawerContentComponentProps } from "@react-navigation/drawer";

export interface HhtMenuMasterBO {
    HHTCode: string;
    Flag: number;
    RField: string;
    MName: string;
    MNumber: number;
    lang: string;
    MenuType: string;
  }
export type DrawerNavigationModel {
  homeMenuList : HhtMenuMasterBO[];
}

export interface HomeDrawerModel {
  props: DrawerContentComponentProps;
  homeMenuList : HhtMenuMasterBO[];
}

export interface HhtMenuMasterBOModel {
  item : HhtMenuMasterBO;
  props: DrawerContentComponentProps;
}