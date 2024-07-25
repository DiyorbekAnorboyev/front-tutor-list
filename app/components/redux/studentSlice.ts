"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface StudentState {
  studentData: [];
  teacherData: [];
  groupData: [];
}

const initialState: StudentState = {
  studentData: [],
  teacherData: [],
  groupData: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudentsS: (state, action) => {
      state.studentData = action.payload;
    },
    getTeachersS: (state, action) => {
      state.teacherData = action.payload;
    },
    getGroupsS: (state, action) => {
      state.groupData = action.payload;
    },
  },
});

export const { getStudentsS, getTeachersS, getGroupsS } = studentSlice.actions;

export default studentSlice.reducer;
