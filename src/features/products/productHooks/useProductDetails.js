import { useEffect, useState } from "react";
import productApi from "../../../api/productApi";

export const useProductDetails = (productID) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.get(productID);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productID]);
  return { product, loading };
};
