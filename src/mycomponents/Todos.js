import React from 'react'
import { Todoitem } from "./Todoitem";
export const Todos = (props) => {
  let myStyle={
    minHeight: "70 vh",
    margin:"10px auto",
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length===0 ? "No todos to Display":
      props.todos.map((todo) => {
        return (<Todoitem todo={todo} key ={todo.sno} onDelete={props.onDelete} />
      )})}
    </div>
  )
}
