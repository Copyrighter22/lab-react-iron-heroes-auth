import { PageLayout } from '../components/layouts';

function HeroesPage() {
  // TODO Iteration 4 | Listado de heroes con buscador
  //
  // Esta pagina debe mostrar el listado de heroes junto a un buscador.
  //   - Guarda los heroes en el estado del componente.
  //   - El termino de busqueda debe vivir en la query string de la URL (parametro
  //     `name`), no en el estado local del componente.
  //   - Cuando cambie el termino de busqueda, pide los heroes a tu heroes-service
  //     (pasandole el `name`) y actualiza el estado.
  //   - Renderiza el buscador (HeroesFinder) y la lista (HeroesList), pasandole
  //     los heroes a la lista.

  return (
    <PageLayout jumbotron={{ title: 'Heroes', subtitle: 'Busca tu heroe favorito' }}>
      <p className="text-muted">TODO: buscador + listado de heroes (Iteration 4)</p>
    </PageLayout>
  );
}

export default HeroesPage;
