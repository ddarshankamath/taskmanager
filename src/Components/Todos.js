import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  const mystyle = { minHeight: "100%", "max-width": "600px" };
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className="text-center">Tasks</h3>
      {/* props.todos */}
      {props.todos.length === 0
        ? "No task to display"
        : props.todos.map((todo) => {
            console.log("hiiiiiiiiiiiiiii", todo);
            return <Todo todo={todo} onDelete={props.onDelete} />;
          })}

      {/* <Todo todo={props.todos[0]} /> */}
    </div>
  );
};

export default Todos;
