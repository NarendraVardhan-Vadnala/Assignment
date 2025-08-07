import React, { useContext } from "react";
import TabContext from "./TabContext";
function NavBar() {
  const { setTab } = useContext(TabContext);
  return (
    <>
      <nav>
        <button
          onClick={() => {
            setTab("todo");
          }}
        >
          Todo App
        </button>
        <button
          onClick={() => {
            setTab("products");
          }}
        >
          Products
        </button>
      </nav>
    </>
  );
}
export default NavBar;
