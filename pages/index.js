import React, { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <h1>Next.js!</h1>
      {productList.map((product) => (
        <div>
          {" "}
          <h3 key={product.id}>{product.name}</h3>
          <img alt={product.name} href={product.image}></img>
        </div>
      ))}
    </div>
  );
};

export default Home;
