import React, { useEffect, useState } from "react";
import data from "../database/data";


const Home = () => {
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    window
    .fetch('/api/avo')
    .then((res) => res.json())
    .then(({data, length}) => {
      setProductList(data)
    })
  }, [])
 
  return (
    <div>
      <div>Next.js!</div>
        {productList.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
    </div>
  );
};

export default Home;
