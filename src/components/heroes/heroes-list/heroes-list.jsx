  // TODO Iteration 4 | Lista de heroes
  //
  // Recibe por props un array de heroes y renderiza un componente HeroesItem por
  // cada uno (acuerdate de la prop `key`). Colocalos en un contenedor que los
  // muestre como una rejilla o lista de tarjetas.
  
import HeroesItem from "../heroes-item/heroes-item";

function HeroesList({ heroes = [], className = '' }) {
  return (
    <div className={`d-flex flex-wrap gap-2 mt-2 ${className}`}>
      {heroes.map((hero) => (
        <HeroesItem key={hero.id} hero={hero} />
      ))}
    </div>
  );
}

export default HeroesList;