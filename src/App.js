import React, { useState, useEffect } from "react";
import Hedder from "./Components/hedder";
import Todos from "./Components/Todos";
// import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("DEleteeeeeeeee of ", todo);
    //let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      //  for( var i=0;i<todos.length;i++) {
      //   if(todos.sno===todo.sno){
      //     todos.splice(i,1)
      //     break;
      //   }
      // }
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("addingggg");
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    //sno = todos.length;

    const myTodo = { sno: sno, title: title, desc: desc };
    setTodos([...todos, myTodo]);
    // localStorage.getItem("todos");
    // localStorage.getItem("todos");
    if (localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const [todos, setTodos] = useState(initTodo, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Hedder title="Task Manager" search={false}></Hedder>
      {/* <div> */}
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}>
        {/* <Todo></Todo> */}
      </Todos>
      {/* </div> */}

      <Footer></Footer>
    </div>
  );
}

export default App;
