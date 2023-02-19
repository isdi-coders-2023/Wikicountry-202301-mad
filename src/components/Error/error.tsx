import "./error.css";

export function Error() {
  const logo = "./images/error.png";
  return (
    <section className="error">
      <img
        className="error__image"
        src={logo}
        alt="Muñeco bandera con una llave inglesa"
      />
      <h1 className="error__title">Error 404</h1>
      <p>
        La URL solicitada no se encontró en el servidor....y hasta aquí puedo
        escribir.
      </p>
    </section>
  );
}
