import {createSlice} from '@reduxjs/toolkit';

const SupplierStore = createSlice({
  name: 'supplier_store',
  initialState: {
    productInfo: {
      type: null,
      isExpired: null,
      isHeated: null,
      lastFourHours: null,
      name: '',
      ingredients: '',
      detail: '',
      quantity: '',
      expireDate: null,
      imgSrc: '',
      address: '',
    },
    userType: null,
  },
  reducers: {
    updateProductInfo: (state, action) => {
      state.productInfo[action.payload.key] = action.payload.value;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});
export const SupplierActions = SupplierStore.actions;
export default SupplierStore.reducer;
