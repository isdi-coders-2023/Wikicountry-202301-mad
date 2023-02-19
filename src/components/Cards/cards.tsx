import "./cards.css";
import { Card } from "../Card/card";
import { WorldContext } from "../../context/app.context";
import React, { useContext, useEffect, useState } from "react";
import { ProtoCountryStrucuture } from "../model/country";

export function Cards() {
  const buttonPrev = "./images/button-prev.png";
  const buttonNext = "./images/button-next.png";

  const {
    stateCountries,
    loadCountries,
    handlerPrevNextButton,
    firstNum,
    secondNum,
  } = useContext(WorldContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <section className="cards">
      <ul className="cards__ul">
        {stateCountries?.countries
          .slice(firstNum, secondNum)
          .map((item: ProtoCountryStrucuture) => (
            <Card key={item.population} country={item}></Card>
          ))}
      </ul>
      <div className="cards-nav">
        <button
          className="cards-nav__button"
          disabled={firstNum === 0 ? true : false}
          onClick={() => {
            handlerPrevNextButton(-10);
            scrollToTop();
          }}
        >
          <img src={buttonPrev} alt="Previous page" />
        </button>
        <button
          className="cards-nav__button"
          disabled={secondNum >= stateCountries.countries.length ? true : false}
          onClick={() => {
            handlerPrevNextButton(10);
            scrollToTop();
          }}
        >
          <img src={buttonNext} alt="Next Page" />
        </button>
      </div>
    </section>
  );
}
