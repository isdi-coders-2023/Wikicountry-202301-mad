import "./details.css";

function Details() {
  return (
    <section className="details">
      <div className="details-top">
        <button>Home</button>
        <button>Favourite</button>
      </div>
      <ul className="details-list">
        <li className="details-list__item details-list__item--center">
          Nombre pais
        </li>
        <li className="details-list__item details-list__item--center">
          Bandera
        </li>
        <li className="details-list__item">
          <p>Capital</p>
          <p>Algo</p>
        </li>
        <li className="details-list__item">
          <p>Lenguaje</p>
          <p>Algo</p>
        </li>
        <li className="details-list__item">
          <p>Moneda</p>
          <p>Algo</p>
        </li>
        <li className="details-list__item">
          <p>Población</p>
          <p>Algo</p>
        </li>
        <li className="details-list__item">
          <p>Continente</p>
          <p>Algo</p>
        </li>
        <li className="details-list__item details-list__item--center">
          Escudo de armas
        </li>
      </ul>
    </section>
  );
}
export default Details;
