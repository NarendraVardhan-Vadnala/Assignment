import React, { useState } from "react";
// import
function AddTask({ data, key, ind, deleteTask, editTask }) {
  const [editvalue, setEdit] = useState(data);
  const [flag, setFlag] = useState(true);
  const [isLable, setLable] = useState(true);
  const [isdel, setDel] = useState(true);

  console.log(editvalue);

  console.log();
  return (
    <li>
      {/* <input type="text" placeholder={props.data} value={props.data} onChange={props.addtask()}> </input> */}
      {isLable ? (
        <label>{data} </label>
      ) : (
        <input
          type="text"
          value={editvalue}
          readOnly={flag}
          onChange={(e) => {
            setEdit(e.target.value);
          }}
        />
      )}
      <button
        onClick={(e) => {
          setFlag(!flag);
          setLable(!isLable);
          setDel(!isdel);
          editTask(ind, editvalue);
        }}
      >
        {flag ? "edit" : "save"}{" "}
      </button>
      {isdel && <button onClick={() => deleteTask(ind)}>delete</button>}
    </li>
  );
}
export default AddTask;
