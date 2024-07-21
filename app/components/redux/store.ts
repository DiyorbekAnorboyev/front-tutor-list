'use client';

import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './studentSlice';

export const store = configureStore({
    reducer: {
        student: studentSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;