import "./cards.css";
import { MOCK_COUNTRIES } from "../../mocks/country-data";
import { Card } from "../Card/card";

export function Cards() {
  return (
    <section className="cards">
      <ul className="cards__ul">
        {MOCK_COUNTRIES.map((item, idx) => (
          <Card key={idx} country={item}></Card>
        ))}
      </ul>
    </section>
  );
}
