import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LanguageModel {
  languageCode: string;
}

const initialState: LanguageModel = {
  languageCode: '',
};
export const languageSlice = createSlice({
  name: 'languageCode',
  initialState: initialState,
  reducers: {
    setSelectedLanguage: (state, action: PayloadAction<string>) => {
      state.languageCode = action.payload;
    },
  },
});

export const {setSelectedLanguage} = languageSlice.actions;
export default languageSlice.reducer;
