import { React, useState, useContext } from "react";
import Todo from "./Components/Todo";
import Test from "./Components/Test";
import Products from "./Components/Products";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

import TabContext from "./Components/TabContext";
function App() {
  // const [tab, setTab] = useState("Home");
  const { tab, setTab } = useContext(TabContext);
  const switchTab = () => {
    switch (tab) {
      case "todo":
        return (
          <>
            <Todo />
          </>
        );
      case "products":
        return <Products setTab={setTab} />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      <NavBar />
      {switchTab()}
    </>
  );
}
export default App;

// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import MaterialUI from "./MaterialUI";
// function Tabfunction({ value, index, children }) {
//   if (value === index) {
//     return <> {children} </>;
//   } else return null;
// }
// <div>
//   <Tabs
//     value={tab}
//     onChange={(e, newvalue) => {
//       setTab(newvalue);
//     }}
//   >
//     <Tab label="Todo App"></Tab>
//     <Tab label="Products"></Tab>
//   </Tabs>
//   <Tabfunction value={tab} index={0}>
//     <Todo />
//   </Tabfunction>
//   <Tabfunction value={tab} index={1}>
//     <Products tab={tab} />
//   </Tabfunction>
// </div>
