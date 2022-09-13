import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import vaccinatedReducer from './reducers/vaccinated';

const store = configureStore({
  reducer: {
    user: userReducer,
    vaccinated: vaccinatedReducer,
  },
});

export default store;
