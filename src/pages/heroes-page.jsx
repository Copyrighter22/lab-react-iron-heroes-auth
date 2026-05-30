import { PageLayout } from '../components/layouts';
import { HeroesFinder, HeroesList } from '../components/heroes';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import * as HeroesService from '../services/heroes-service';

function HeroesPage() {
  // TODO Iteration 3:
  // 1. const [heroes, setHeroes] = useState([]);
  // 2. const [searchParams] = useSearchParams();
  //    const name = searchParams.get('name') ?? '';
  // 3. useEffect que, cuando cambia `name`, llama a HeroesService.listHeroes({ name })
  //    y guarda el resultado con setHeroes(...).
  // 4. Pasa los heroes a <HeroesList heroes={heroes} />.

  return (
    <PageLayout jumbotron={{ title: 'Heroes', subtitle: 'Busca tu heroe favorito' }}>
      <HeroesFinder />
      <HeroesList heroes={[]} />
    </PageLayout>
  );
}

export default HeroesPage;
