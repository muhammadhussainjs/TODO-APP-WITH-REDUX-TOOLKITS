
import {createSlice , nanoid} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name:'Todos',
    initialState:{
        todos:[

        ],
    

    },
    reducers:{
        addTodo:(state , action)=>{
            state.todos.push({
                title:action.payload.title,
                
            })

        },
        removeTodo:(state , action )=>{
            state.todos.splice(action.payload.index , 1)
        }, 
        editTodo:(state , action)=>{
            const newvalue = prompt('enter new todo')
            state.todos[action.payload.index].title = newvalue
        }
    }

})
export const {addTodo , removeTodo , editTodo } = todoSlice.actions
export default todoSlice.reducer

