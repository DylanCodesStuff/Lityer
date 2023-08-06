import React from "react";
import WeeklySpecial from "../Components/WeeklySpecial";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Home() {
  return (
    <div className="home-container flex flex-col">
      <WeeklySpecial />
      <div className="cards-container-text-container">
        <p className="cards-container-text text-center mt-4 mb-4 text-3xl">This Week's Best Deals:</p>
      </div>

      <ul className="home-page-cards-container flex flex-wrap">
        {data.map((item, i) => (
          <div className="basis-1/2" key={i}>
            <Card img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} />
          </div>
        ))}
      </ul>

      {/* <div className="home-page-list-container flex flex-wrap">
        <div className="item w-full basis-1/2">1</div>
        <div className="item w-full basis-1/2">2</div>
        <div className="item w-full basis-1/2">3</div>
        <div className="item w-full basis-1/2">4</div>
      </div> */}
    </div>
  );
}
