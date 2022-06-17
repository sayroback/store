import { useEffect, useState } from "react";
import axios from "axios";

const fakeStore = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const GetProduct = () => {
  const [products, setProducts] = useState();
  const [product, setProduct] = useState();

  const getTenProducts = async () => {
    try {
      const res = await fakeStore.get("/products?offset=0&limit=10");
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProduct = async (props) => {
    try {
      const res = await fakeStore.get(`/products/${props.id}`);
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTenProducts();
  }, []);

  return { products, getTenProducts, product, getOneProduct };
};
