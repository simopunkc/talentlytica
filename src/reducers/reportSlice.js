import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: [],
  printer: {},
};
const objAspek = (id) => `aspek_penilaian_${id}`;
const objMahasiswa = (id) => `mahasiswa_${id}`;

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    withdraw: (state, action) => {
      const tempIndex = state.balance.findIndex(
        (current) => current.aspek === action.payload.aspek
          && current.mahasiswa === action.payload.mahasiswa
      );
      if (tempIndex === -1) {
        throw new Error('insufficient balance');
      } else {
        state.balance.splice(tempIndex, 1);
      }
    },
    deposit: (state, action) => {
      const tempIndex = state.balance.findIndex(
        (current) => current.aspek === action.payload.aspek
          && current.mahasiswa === action.payload.mahasiswa
      );
      if (tempIndex === -1) {
        state.balance.push(action.payload);
      } else {
        state.balance[tempIndex].value = action.payload.value;
      }
      state.balance.sort((a, b) => {
        return a.aspek - b.aspek || a.mahasiswa - b.mahasiswa;
      });
    },
    printer: (state) => {
      const temp = {};
      state.balance.forEach((current) => {
        if (!temp[objAspek(current.aspek)]) {
          temp[objAspek(current.aspek)] = {};
        }
        if (!temp[objAspek(current.aspek)][objMahasiswa(current.mahasiswa)]) {
          temp[objAspek(current.aspek)][objMahasiswa(current.mahasiswa)] = current.value;
        }
      });
      state.printer = temp;
    },
  },
});

export const { deposit, withdraw, printer } = reportSlice.actions;

export const selectBalance = (state) => state.report.balance;
export const selectPrinter = (state) => state.report.printer;

export default reportSlice.reducer;