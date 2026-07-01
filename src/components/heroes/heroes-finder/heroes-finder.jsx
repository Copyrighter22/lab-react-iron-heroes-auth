
  // TODO Iteration 4 | Buscador
  //
  // Renderiza un input de texto controlado para buscar heroes por nombre.
  // El valor del buscador debe estar sincronizado con la query string de la URL
  // (parametro `name`): al escribir en el input debes actualizar ese parametro, y
  // el valor mostrado en el input debe leerse tambien desde la URL.

import { useSearchParams } from 'react-router-dom';

function HeroesFinder() {
  const [search, setSearch] = useSearchParams();
  const name = search.get('name') ?? '';

  const handleSearchChange = (event) => {
    setSearch({ name: event.target.value });
  };

  return (
    <div className="input-group">
      <span className="input-group-text"><i className="fa fa-search"></i></span>
      <input
        type="text"
        value={name}
        className="form-control"
        placeholder="Buscar heroe por nombre..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default HeroesFinder;
