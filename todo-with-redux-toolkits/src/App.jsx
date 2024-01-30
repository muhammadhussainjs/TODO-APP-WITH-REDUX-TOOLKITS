import React, {  useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo   } from './config/reduxconfig/reducers/Todoslice'


const App = () => {

const dispatch = useDispatch()
const selector = useSelector(state => state.todos)
  const inputvalue = useRef()

  function todoref(event){
    event.preventDefault()
    console.log(inputvalue.current.value);
    dispatch(addtodo({
      title: inputvalue.current.value
    }))
    console.log(selector);
    inputvalue.current.value = ''



  }


  return (
    <>
    <h1>Todo</h1>
    <form onSubmit={todoref}>
      <input type="text" ref={inputvalue}/>
      <button>AddTodo</button>
    </form>
    </>
  )
}

export default App