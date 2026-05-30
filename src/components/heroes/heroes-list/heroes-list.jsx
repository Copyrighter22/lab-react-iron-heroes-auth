// import HeroesItem from "../heroes-item/heroes-item";

function HeroesList({ heroes = [] }) {
  // TODO Iteration 3:
  // Recorre `heroes` con .map() y renderiza un <HeroesItem key={hero.id} hero={hero} />
  // por cada heroe, dentro del contenedor flex de abajo.

  return (
    <div className="d-flex flex-wrap gap-2 mt-2">
      {/* TODO: renderiza un HeroesItem por cada heroe */}
    </div>
  );
}

export default HeroesList;
