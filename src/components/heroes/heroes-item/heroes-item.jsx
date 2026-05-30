// import { Link } from "react-router-dom";

function HeroesItem({ hero }) {
  // TODO Iteration 3:
  // Renderiza una card de bootstrap con la imagen (hero.image), el nombre (hero.name)
  // y el alias (hero.alias). Envuelve la card en un <Link to={`/heroes/${hero.id}`}>
  // para poder navegar al detalle (Iteration 4).

  return (
    <div className="card" style={{ width: '12rem' }}>
      {/* TODO: imagen + nombre + alias + Link al detalle */}
      <div className="card-body">
        <h6 className="card-title">TODO: hero</h6>
      </div>
    </div>
  );
}

export default HeroesItem;
