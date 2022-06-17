import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState();

  const getCategories = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, getCategories };
};
