import React, { useState } from "react";
const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be empty");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3 ">
      <h3>Add a Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="desc"
            className="form-control"
            placeholder="Add title"
          />
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            placeholder="Add description"
          />
        </div>
        <div className="mb-3">
          <div className="form-check"></div>
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
