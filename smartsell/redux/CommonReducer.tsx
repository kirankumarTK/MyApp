import {combineReducers} from '@reduxjs/toolkit';
import LanguageSlice, {languageSlice} from './LanguageSlice';
import RetailerMasterSlice from '../screens/RoutePlanning/RetailerMasterSlice';

export default combineReducers({
  languageSlice: LanguageSlice,
  retailerMastrSlice: RetailerMasterSlice,
});
