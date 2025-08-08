import React, { useState } from "react";
import TabContext from "./TabContext";

function TabProvider({ children }) {
  const [tab, setTab] = useState("home");
  const [productsFetched, setProductsFetched] = useState(false);
  const [productsData, setProductsData] = useState([]);

  return (
    <TabContext.Provider
      value={{
        tab,
        setTab,
        productsData,
        setProductsData,
        productsFetched,
        setProductsFetched,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

export default TabProvider;
