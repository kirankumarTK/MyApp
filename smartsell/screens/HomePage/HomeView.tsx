import React from 'react';
import Drawernavigation from '../../Components/Navigations/DrawerNavigation';
import { HomeViewModel } from './HomeViewModel';

const HomeView = () => {
  const {homeMenuList} = HomeViewModel();
  return (
    <React.Fragment>
      <Drawernavigation homeMenuList = {homeMenuList}/>
    </React.Fragment>
  );
};

export default HomeView;
