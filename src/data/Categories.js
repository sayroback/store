/* <span class="material-symbols-outlined">checkroom</span>;
<span class="material-symbols-sharp">watch</span>;
<span class="material-symbols-sharp">chair</span>;
<span class="material-symbols-sharp">roller_skating</span>;
<span class="material-symbols-sharp">add_circle</span>; */

import { useEffect } from "react";
import { useState } from "react";

export const Categories = () => {
  const categoriesURL = "https://api.escuelajs.co/api/v1/categories";
  const [categories, setCategories] = useState();

  async function getCategories() {
    const res = await fetch(categoriesURL);
    const data = await res.json();
    setCategories(data);
  }
  useEffect(() => {
    getCategories();
  }, []);

  return { categories, setCategories };
};
