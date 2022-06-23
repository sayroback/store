import { useEffect, useState } from "react";
import axios from "axios";

const fakeStore = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const GetProduct = () => {
  const [products, setProducts] = useState();
  const [product, setProduct] = useState();
  const [allProducts, setAllProducts] = useState();

  const getSomeProducts = async () => {
    try {
      const res = await fakeStore.get("/products?offset=0&limit=12");
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

    if (!props) {
      getSomeProducts();
    } else {
      try {
        const res = await fakeStore.get(
          `/categories/${category}/products?offset=0&limit=12`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getSomeProducts();
  }, []);

  return {
    products,
    getSomeProducts,
    product,
    getOneProduct,
    getProductForCategory,
  };
};
