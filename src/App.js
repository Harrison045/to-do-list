import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
