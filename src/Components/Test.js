import { React, useState, useEffect } from "react";

function Test() {
  console.log(1);
  //   useState[(count, setCount)] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("2useffect");
    setCount(100);
  }, []);
  console.log(3);

  return (
    <>
      <h1> this is testing</h1>
      <button onClick={() => setCount(count + 1)}> click me</button>
    </>
  );
}
export default Test;

// {/* <ol>
// {todos
//   .filter((todo) => {
//     if (!isSearch) return true;
//     return todo.toLowerCase().includes(searchvalue.toLowerCase());
//   })
//   .map((todo, index) => (
//     <AddTask
//       data={todo}
//       key={index}
//       ind={index}
//       deleteTask={deleteTask}
//       editTask={editTask}
//     />

// <li  key={index}>
/* {todo} {"\t"}
            <button className="delete-btn" onClick={() => deleteTask(index)}>delete</button> */
// </li>
//     ))}
// </ol>; */}
