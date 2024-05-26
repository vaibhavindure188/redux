
import { createSlice, nanoid } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name:'project',
    initialState:{
        projects: [{id:1,name:'project1', manager:'vaibhav'}]
    },
    reducers:{
        addProject : (state, action) =>{
              let id = nanoid()
              let name = action.payload.name;
              let manager = action.payload.manager;
              state.projects.push({id,name, manager})
        },
        deleteProject : (state, action)  =>{
               let id = action.payload.id;
               state.projects = state.projects.filter((project) => project.id !== id)
        }
    }
})

export const {addProject, deleteProject} = projectSlice.actions;
export default projectSlice.reducer;