import { PageLayout } from '../components/layouts';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import * as HeroesService from '../services/heroes-service';

function HeroDetailPage() {
  // TODO Iteration 4:
  // 1. const { id } = useParams();
  // 2. const [hero, setHero] = useState(null);
  // 3. useEffect que llama a HeroesService.getHero(id) y guarda el resultado.
  // 4. Mientras no haya hero, muestra un mensaje de carga.
  // 5. Renderiza name, alias, publisher, image, description y la lista de powers
  //    (recorre hero.powers con .map()).

  return (
    <PageLayout jumbotron={{ title: 'Detalle del heroe' }}>
      {/* TODO: muestra los datos del heroe */}
      <p className="text-muted">TODO: Hero detail (Iteration 4)</p>
    </PageLayout>
  );
}

export default HeroDetailPage;
