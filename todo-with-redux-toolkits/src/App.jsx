import React, {  useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo , editTodo   } from './config/reduxconfig/reducers/Todoslice'


const App = () => {

const dispatch = useDispatch()
const selector = useSelector(state => state.todos)

  const inputvalue = useRef()

  function todoref(event){
    event.preventDefault()
    console.log(inputvalue.current.value);
    dispatch(addTodo({
      title: inputvalue.current.value
    }))
    console.log(selector);
    inputvalue.current.value = ''

  }

  function deletetodo(index){
    dispatch( removeTodo({
      index: index
    }))
    
  }
  
  function edittodo(index , title){
   
    dispatch(editTodo({
      index:index,
      title:title
    }))

  }


  return (
    <>
    <h1>Todo</h1>
    <form onSubmit={todoref}>
      <input type="text" ref={inputvalue}/>
      <button type='submit'>AddTodo</button>
    </form>
    <ul>
    {selector.map((item , index)=>{
      return <li key={item.title}>
        
        {item.title}
      <button onClick={()=>{deletetodo(index)}}>delete</button>
      <button onClick={()=>{edittodo(index , item.title)}}>edit</button>
      </li>
      
    })}
    </ul>
    </>
  )
}

export default App