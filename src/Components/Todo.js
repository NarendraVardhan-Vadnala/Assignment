import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";

function Todo() {
  // const [todos, setTodos] = useState([]);
  // const [value, setValue] = useState("");
  const [isSearch, setSearch] = useState(true);
  const [searchvalue, setSearchvalue] = useState("");

  const [todos, setTodos] = useState(() => {
    console.log(1);
    const saved = sessionStorage.getItem("myTodos");
    return saved ? JSON.parse(saved) : [];
  });

  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(2);

    sessionStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  const addtask = () => {
    setTodos([...todos, value]);
    setValue("");
  };

  const editTask = (id, newvalue) => {
    setTodos(todos.map((ele, ind) => (id === ind ? newvalue : ele)));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((ele, i) => i !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Todo List</h1>
      <div>
        <button
          onClick={() => {
            setSearch(!isSearch);
            // console.log(isSearch);
          }}
        >
          🔍
        </button>
        {isSearch && (
          <input
            type="text"
            value={searchvalue}
            onChange={(e) => {
              setSearchvalue(e.target.value);
            }}
          />
        )}
        {isSearch && (
          <button
            onClick={() => {
              setSearchvalue("");
            }}
          >
            X
          </button>
        )}
      </div>
      <div> </div>
      <div> </div>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter your task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addtask();
          }
        }}
      />
      <button className="add-btn" onClick={addtask}>
        +
      </button>
      {todos.map((todo, index) => {
        if (isSearch && !todo.includes(searchvalue)) {
          return null;
        }
        return (
          <AddTask
            key={index}
            data={todo}
            ind={index}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        );
      })}

      {/* <h3>The count of tasks to do are {todos.length}</h3> */}

      <button onClick={() => setTodos([])}>Clear All</button>
    </div>
  );
}

export default Todo;
