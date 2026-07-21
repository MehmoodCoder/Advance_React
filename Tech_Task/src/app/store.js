import {configureStore} from '@reduxjs/toolkit'
import Slice from '../features/Slice'
import asyncTaskReducer from '../features/asyncTaskSlice'


export const store = configureStore({
    reducer: {
        Slice: Slice,
        asyncTasks: asyncTaskReducer,
    }

})
