import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="card">
      <h4 className="card-header">{todo.title}</h4>
      <p className="card-body">{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default Todo;
