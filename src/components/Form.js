import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Type in here"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
