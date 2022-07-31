import React from "react";
import "./Select.css";
function Select({ setCategoryAll }) {
  return (
    <select onChange={setCategoryAll} className="select">
      <option value="all">All</option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
      <option value="fragrances">Fragrances</option>
      <option value="skincare">Skincare</option>
      <option value="groceries">Groceries</option>
      <option value="home-decoration">Home-decoration</option>
    </select>
  );
}

export default Select;
