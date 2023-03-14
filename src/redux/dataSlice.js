import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataPack',
  initialState: {
    time: 0,
    dataSet: null
  },
  reducers: {
    updateDataPack: (state, action) => {
      state.dataSet = action.payload    
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateDataPack } = dataSlice.actions

export default dataSlice.reducer