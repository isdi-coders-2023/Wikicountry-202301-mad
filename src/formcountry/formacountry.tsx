import { SyntheticEvent, useState } from "react";
import { ProtoCountryStrucuture } from "../model/country";

export function Contact2() {
  const initialUserData: ProtoCountryStrucuture = {
    countryName: "",
    capital: "",
    region: "",
    languages: "",
    currency: "",
    population: "",
    maps: "",
    flags: "",
    coatOfArns: "",
  } as unknown as ProtoCountryStrucuture;

  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    const type = element.getAttribute("type");
    setUserData({
      ...userData,
      [element.name]: type === "checkbox" ? element.checked : element.value,
    });
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log(userData);
  };

  return (
    <>
      <h2>Formulario controlado</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="population">Population</label>
          <input
            type="population"
            id="population"
            name="population"
            value={userData.population}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formControl">
          <label htmlFor="countryname">Nombre del país</label>
          <input
            type="countryname"
            id="countryname"
            name="countryname"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <select
            name="category"
            id=""
            value={userData.languages}
            onChange={handleChange}
            required
          >
            <option></option>
            <option value="01-st">Standart</option>
            <option value="02-gd">Gold</option>
            <option value="03-pm">Premium</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
