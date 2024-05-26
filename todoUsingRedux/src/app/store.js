
import {configureStore} from '@reduxjs/toolkit'
import todoslice from '../features/todo/todoslice'
import projectSlice from '../features/projects/projectSlice'

export const store = configureStore({
    reducer:  {todoslice,projectSlice}
})