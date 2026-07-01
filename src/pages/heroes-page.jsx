import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PageLayout } from '../components/layouts';
import { HeroesFinder, HeroesList } from '../components/heroes';
import * as HeroesService from '../services/heroes-service';


function HeroesPage() {
  const [heroes, setHeroes] = useState([]);
  
  const [search] = useSearchParams();
  const name = search.get("name") || "";

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const heroes = await HeroesService.listHeroes({ name })
        setHeroes(heroes);
      } catch (error) {
        console.error("Error fetching heroes:", error);
      }
    };

    fetchHeroes();
  }, [name]);

  return (
    <PageLayout jumbotron={{ title: 'Heroes', subtitle: 'Busca tu heroe favorito' }}>
      <HeroesFinder />
      <HeroesList heroes={heroes} />
    </PageLayout>
  );
}

export default HeroesPage;