/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import vaccinatedList from '../../data/vaccinated';

const initialState = { vaccinatedList };

export const vaccinatedSlice = createSlice({
  name: 'vaccinated',
  initialState,
  reducers: {
    getVaccinateds: (state, action) => {
      state.vaccinatedList = action.payload;
    },
    setVaccine: (state, action) => {
      if (!state.vaccinatedList[action.payload.walletAddress]) {
        state.vaccinatedList[action.payload.walletAddress] = {
          person: action.payload.person,
          vaccines: [],
        };
      }
      state.vaccinatedList[action.payload.walletAddress].vaccines.push({
        name: action.payload.name,
        dose: action.payload.dose,
        date: action.payload.date,
      });

      localStorage.setItem(
        'vaccinatedList',
        JSON.stringify(state.vaccinatedList),
      );
    },
  },
});

export const { setVaccine, getVaccinateds } = vaccinatedSlice.actions;
export default vaccinatedSlice.reducer;
