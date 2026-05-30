// import { useSearchParams } from 'react-router-dom';

function HeroesFinder() {
  // TODO Iteration 3:
  // 1. const [searchParams, setSearchParams] = useSearchParams();
  //    const name = searchParams.get('name') ?? '';
  // 2. onChange del input: setSearchParams({ name: event.target.value });
  // 3. El input debe ser controlado (value={name}).

  return (
    <div className="input-group">
      <span className="input-group-text"><i className="fa fa-search"></i></span>
      <input type="text" className="form-control" placeholder="Buscar heroe por nombre..." />
      {/* TODO: convierte este input en controlado y conectalo a useSearchParams */}
    </div>
  );
}

export default HeroesFinder;
