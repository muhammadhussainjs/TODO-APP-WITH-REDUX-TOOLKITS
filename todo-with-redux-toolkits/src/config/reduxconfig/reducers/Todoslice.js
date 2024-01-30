
import {createSlice , nanoid} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name:'todos',
    initialstate:{
        todos:[{
            title:'hello world',
            id: 1

        }]

    },
    reducers:{
        addtodo:(state , action)=>{
            state.todos.push({
                tltle:action.payload.title,
                id: nanoid()
            })

        },
        removetodo:(state , action )=>{
            state.todos.splice(action.payload.index , 1)
        }
    }

})
export const {addtodo , removetodo } = todoSlice.actions
export default todoSlice.reducer

