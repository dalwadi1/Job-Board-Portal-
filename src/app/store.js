import { configureStore } from "@reduxjs/toolkit";
import getJobSlice from '../features/slices/jobs.slice'

export const store = configureStore({
    reducer: {
        jobs: getJobSlice
    }
})