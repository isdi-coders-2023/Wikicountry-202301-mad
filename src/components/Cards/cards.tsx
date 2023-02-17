import "./cards.css";
import { Card } from "../Card/card";
import { worldContext } from "../../context/app.context";
import { useContext } from "react";
import { ProtoCountryStrucuture } from "../model/country";

export function Cards() {
  const { stateCountries } = useContext(worldContext);

  return (
    <section className="cards">
      <ul className="cards__ul">
        {stateCountries.countries?.map((item: ProtoCountryStrucuture) => (
          <Card key={item.population} country={item}></Card>
        ))}
      </ul>
    </section>
  );
}
