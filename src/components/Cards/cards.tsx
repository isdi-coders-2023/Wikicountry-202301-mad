import "./cards.css";
import { Card } from "../Card/card";
import { worldContext } from "../../context/app.context";
import { useContext, useEffect } from "react";

export function Cards() {
  const { countries, loadCountries } = useContext(worldContext);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <section className="cards">
      <ul className="cards__ul">
        {countries.map((item) => (
          <Card key={item.population} country={item}></Card>
        ))}
      </ul>
    </section>
  );
}
