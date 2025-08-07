import { React, useEffect, useContext, useState, useRef } from "react";
import TabProvider from "./TabProvider";
import TabContext from "./TabContext";

function Products() {
  const [apidata, setApidata] = useState([]);
  const {
    tab,
    productsData = [],
    setProductsData,
    productsFetched,
    setProductsFetched,
  } = useContext(TabContext);
  useEffect(() => {
    if (tab === "products" && !productsFetched) {
      console.log("fetching api................");

      fetch("https://dummyjson.com/products?limit=0")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const requiredData = data.products.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
          }));
          setApidata(requiredData);
          setProductsData(requiredData);
          setProductsFetched(true);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [tab, productsFetched]);
  useEffect(() => {
    console.log("this gets printed", productsData);
  }, [productsData]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productsData.map((data) => (
          <li key={data.id}>
            <strong>
              {data.id} {data.title}
            </strong>
            : {data.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
