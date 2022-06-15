/* <span class="material-symbols-outlined">checkroom</span>;
<span class="material-symbols-sharp">watch</span>;
<span class="material-symbols-sharp">chair</span>;
<span class="material-symbols-sharp">roller_skating</span>;
<span class="material-symbols-sharp">add_circle</span>; */

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState();

  const getCategories = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      console.log(res.data);
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
