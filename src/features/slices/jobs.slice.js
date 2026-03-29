import { createSlice } from "@reduxjs/toolkit"
import { getJobs } from "../actions/jobs.action"

const initialState = {
    loading: false,
    jobs: null,
}

const getJobSlice = createSlice({
    name: 'GetJobs',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getJobs.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getJobs.fulfilled, (state, action) => {
            state.loading = false
            state.jobs = action.payload
        })

        builder.addCase(getJobs.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export default getJobSlice.reducer