import { Link } from "react-router-dom";
import { PageLayout } from "../components/layouts";

function HomePage() {
  return (
    <PageLayout
      jumbotron={{
        title: 'Iron Heroes',
        subtitle: 'Tu catalogo de superheroes'
      }}
    >
      <p className="lead">Explora el catalogo de heroes, registrate y entra para empezar.</p>
      <Link className="btn btn-primary" to="/heroes">Ver heroes</Link>
    </PageLayout>
  );
}

export default HomePage;
