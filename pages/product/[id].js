import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState();

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div>
      <h1>Pagina del producto</h1>
      <h3>{product?.name}</h3>
    </div>
  );
};

export default ProductItem;
