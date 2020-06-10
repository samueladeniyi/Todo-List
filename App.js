import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from "./TodoList";
import uuid from "uuid/v4";
import Header from "./Header";
import About from "./About";

const Local_Storage_key = "todoApp.todos";

function App() {
  const [todos, changeTodos] = useState([]);
  const todoRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_key));
    if (storedTodos) changeTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(Local_Storage_key, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    changeTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoRef.current.value;
    if (name === "") return;
    changeTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }];
    });
    todoRef.current.value = null;
  }

  function handleClear() {
    const newTodos = todos.filter((todo) => !todo.complete);
    changeTodos(newTodos);
  }

  return (
    <Router>
      <Header />
      <div style={{ fontSize: "1.5rem" }}>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <div style={content}>
                <input style={{ fontSize: "1rem" }} ref={todoRef} type="text" />
                <button style={{ fontSize: "1rem" }} onClick={handleAddTodo}>
                  Add Todo
                </button>

                <button style={{ fontSize: "1rem" }} onClick={handleClear}>
                  Clear Complete
                </button>

                <div style={{ color: "red" }}>
                  {todos.filter((todo) => !todo.complete).length} left to do
                </div>
              </div>
              <TodoList todos={todos} toggleTodo={toggleTodo} />
            </React.Fragment>
          )}
        />
      </div>
      <Route path="/about" component={About} />
    </Router>
  );
}

const content = {
  textAlign: "center",
};

export default App;
