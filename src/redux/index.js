import {combineReducers, configureStore} from '@reduxjs/toolkit';

import SupplierStore from './reducers/SupplierStore';

const rootReducer = combineReducers({
  SupplierStore,
});

export const store = configureStore({
  reducer: rootReducer,
});
