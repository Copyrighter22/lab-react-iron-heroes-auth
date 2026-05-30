import { PageLayout } from '../components/layouts';

function HeroDetailPage() {
  // TODO Iteration 5 | Detalle del heroe
  //
  // Lee el id del heroe desde los parametros de la URL.
  // Pide ese heroe a tu heroes-service y guardalo en el estado del componente.
  // Mientras no haya datos, muestra un mensaje de carga.
  // Cuando tengas el heroe, muestra su nombre, alias, publisher, imagen,
  // descripcion y la lista de sus poderes.

  return (
    <PageLayout jumbotron={{ title: 'Detalle del heroe' }}>
      <p className="text-muted">TODO: detalle del heroe (Iteration 5)</p>
    </PageLayout>
  );
}

export default HeroDetailPage;
