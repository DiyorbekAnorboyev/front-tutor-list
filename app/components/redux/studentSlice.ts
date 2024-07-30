"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface StudentState {
  studentData: [];
  teacherData: [];
  groupData: [];
  isLoading: boolean;
  theme: boolean
}

const initialState: StudentState = {
  studentData: [],
  teacherData: [],
  groupData: [],
  isLoading: false,
  theme: false
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme ? false : true
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    getStudentsS: (state, action) => {
      state.studentData = action.payload;
      state.isLoading = false;
    },
    getTeachersS: (state, action) => {
      state.teacherData = action.payload;
      state.isLoading = false;
    },
    getGroupsS: (state, action) => {
      state.groupData = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getStudentsS, getTeachersS, getGroupsS, startLoading,toggleTheme } =
  studentSlice.actions;

export default studentSlice.reducer;
