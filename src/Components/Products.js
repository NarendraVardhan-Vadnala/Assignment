import { React, useEffect, useContext, useState, useRef } from "react";
import TabContext from "./TabContext";

function Products() {
  const [apidata, setApidata] = useState([]); // redundant  not needed
  const [searchResults, setSearchResults] = useState([]);
  const [searchdata, setsearchData] = useState("");
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
          setApidata(requiredData); // redundant
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

  // function to fetch the search api.....................
  function searchOnApi(event) {
    const value = event.target.value;
    setsearchData(value);

    if (searchdata.trim() === "") {
      setSearchResults([]);
      return;
    }
    console.log("searching on the api....please wait");
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => {
        const requiredData = data.products.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
        }));
        setSearchResults(requiredData);
      })
      .catch((error) => {
        console.error("Search Error:", error);
      });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchdata}
          placeholder="search here..."
          onChange={searchOnApi}
        />
      </div>
      <h2>Product List</h2>
      <ul>
        {(searchdata.trim() !== "" ? searchResults : productsData).map(
          (data) => (
            <li key={data.id}>
              <strong>
                {data.id} {data.title}
              </strong>
              : {data.description}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
export default Products;
