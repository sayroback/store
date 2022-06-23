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
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProduct = async (props) => {
    try {
      const res = await fakeStore.get(`/products/${props.id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductForCategory = async (props) => {
    let category = `${props}`;
    let urlapi = `https://api.escuelajs.co/api/v1/categories/${category}/products?offset=0&limit=10`;

    if (!props) {
      getTenProducts();
    } else {
      try {
        const res = await axios.get(urlapi);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getTenProducts();
  }, []);

  return {
    products,
    getTenProducts,
    product,
    getOneProduct,
    getProductForCategory,
  };
};
