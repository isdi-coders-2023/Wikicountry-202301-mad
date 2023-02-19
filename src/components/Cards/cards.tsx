/* eslint-disable react-hooks/rules-of-hooks */
import "./cards.css";
import { Card } from "../Card/card";
import { WorldContext } from "../../context/app.context";
import React, { useContext, useEffect, useState } from "react";
import { ProtoCountryStrucuture } from "../model/country";

export function Cards() {
  const buttonPrev = "./images/button-prev";
  const buttonNext = "./images/button-next";

  const { stateCountries, loadCountries } = useContext(WorldContext);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(10);

  const hadlerPrevNextButton = (num: number) => {
    setSecondNum(secondNum + num);
    setFirstNum(firstNum + num);
  };

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <section className="cards">
      <ul className="cards__ul">
        {stateCountries.countries
          .slice(firstNum, secondNum)
          .map((item: ProtoCountryStrucuture) => (
            <Card key={item.population} country={item}></Card>
          ))}
      </ul>
      <div>
        <button
          disabled={firstNum === 0 ? true : false}
          onClick={() => {
            hadlerPrevNextButton(-10);
          }}
        >
          <img src={buttonPrev} alt="Previous page" />
        </button>
        <button
          disabled={secondNum === 250 ? true : false}
          onClick={() => {
            hadlerPrevNextButton(10);
          }}
        >
          <img src={buttonNext} alt="Next Page" />
        </button>
      </div>
    </section>
  );
}
