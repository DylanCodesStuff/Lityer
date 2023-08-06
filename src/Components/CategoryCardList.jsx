import React from "react";
import Card from "./Card";
export default function CategoryCardList({ img, title, description, price }) {
  return (
    <>
      <div className="cards-container-text-container">
        <p className="cards-container-text"></p>
      </div>
      <div className="cards-container">
        <Card img={img} title={title} description={description} price={price} />
        <Card img={img} title={title} description={description} price={price} />
        <Card img={img} title={title} description={description} price={price} />
        <Card img={img} title={title} description={description} price={price} />
        <Card img={img} title={title} description={description} price={price} />
      </div>
    </>
  );
}
