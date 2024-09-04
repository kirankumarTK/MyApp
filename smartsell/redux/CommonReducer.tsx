import { combineReducers } from "@reduxjs/toolkit";
import LanguageSlice, { languageSlice } from "./LanguageSlice";

export default combineReducers({
    languageSlice : LanguageSlice
});