import "./RicipeList.css";
import { Link } from "react-router-dom";
import React from "react";
// import { useState } from "react";

function RicipeList({ data }) {
  return (
    <div className="recipe-list">
      {data &&
        data.map((recipe) => {
          return (
            <div className="card" key={recipe.id}>
              <div className="cardImage">
                <img
                  className="card-image"
                  src={recipe.thumbnail}
                  alt="images"
                />
                <span className="skidka">-{recipe.discountPercentage}%</span>
              </div>
              <div className="description">
                <p>
                  <b>Name: </b> {recipe.title}
                </p>
                <p>
                  <b>Price: </b> {recipe.price}${" "}
                </p>
                <p>
                  <b>Description: </b> {recipe.description.substring(0, 30)}
                  ........
                </p>
              </div>
              <div>
                <Link className="read-more" to={`/recipe/${recipe.id}`}>
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default RicipeList;
