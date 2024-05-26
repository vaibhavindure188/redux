import { nanoid ,createSlice} from "@reduxjs/toolkit";

 const todoSlice = createSlice( {
    name: 'todo',
    initialState: {
        todos :[{id:1,text:'hello'}],
        username: 'vaibhav',
        obj : {
            innerObj: {key1:'val1'}
        }

    },
    reducers:{
        addTodo: (state, action) =>{
             const text = action.payload;
             console.log(text)
             let id = nanoid()
             state.todos.push({id,text})
        },
        removeTodo: (state,action) =>{
              let id = action.payload.id;
              state.todos = state.todos.filter((ele)=> (ele.id !== id))
        }
    }
}
)

export const {addTodo, removeTodo}  = todoSlice.actions;

export default todoSlice.reducer;