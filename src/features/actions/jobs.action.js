import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://69c3974fb780a9ba03e741ac.mockapi.io/api/v1/jobboardportal'

export const getJobs = createAsyncThunk('jobs/getJobs', async (_, rejectWithValue) => {
    try {
        const resp = await axios.get(BASE_URL)
        return resp.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})