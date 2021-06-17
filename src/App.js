import './App.css';
import Header from "./mycomponents/Header";
import { Footer } from "./mycomponents/Footer";
import { Todos } from "./mycomponents/Todos";
import { AddTodo } from "./mycomponents/AddTodo";
import React, { useEffect, useState } from 'react';
import {About} from "./mycomponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Click to delete");

    setTodos(todos.filter((e) => { return e !== todo; })); localStorage.setItem("todos", JSON.stringify(todos));

  }


  const addTodo = (title, desc) => {
    console.log("Sucessfully Addedtodo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);         //...todo-making array and then adding new element through myTodo
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Switch>
          <Route exact path="/" render={() => {
            return(
          <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          </>)
      }}>
          </Route>
        <Route exact path="/about">
          <About />
        </Route>
        </Switch>
      <Footer />
    </Router>
    </>
  );
}
// 1.17.00
export default App;
