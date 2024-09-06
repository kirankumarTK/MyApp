import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RetailerMasterBO} from '../../models/commonModels';

interface RetailerMasters {
  retailerMasters: Array<RetailerMasterBO>;
}
const intialState: RetailerMasters = {
  retailerMasters: [],
};

const retailerMasterSlice = createSlice({
  initialState: intialState,
  name: 'retailer',
  reducers: {
    setRetailerDetails: (
      state,
      action: PayloadAction<Array<RetailerMasterBO>>,
    ) => {
      state.retailerMasters = action.payload;
    },
  },
});

export const {setRetailerDetails} = retailerMasterSlice.actions;

export default retailerMasterSlice.reducer;
``;
