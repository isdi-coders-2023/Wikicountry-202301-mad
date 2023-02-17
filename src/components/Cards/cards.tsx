import "./cards.css";
import { Card } from "../Card/card";
import { WorldContext } from "../../context/app.context";
import { useContext, useEffect } from "react";
import { ProtoCountryStrucuture } from "../model/country";

export function Cards() {
  // const { stateCountries, loadCountries } = useWorld(new ApiCountryRepo());

  const { stateCountries, loadCountries } = useContext(WorldContext);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <section className="cards">
      <ul className="cards__ul">
        {stateCountries.countries.map((item: ProtoCountryStrucuture) => (
          <Card key={item.population} country={item}></Card>
        ))}
      </ul>
    </section>
  );
}
