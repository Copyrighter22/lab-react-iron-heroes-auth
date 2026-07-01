
  // TODO Iteration 5 | Detalle del heroe
  //
  // Lee el id del heroe desde los parametros de la URL.
  // Pide ese heroe a tu heroes-service y guardalo en el estado del componente.
  // Mientras no haya datos, muestra un mensaje de carga.
  // Cuando tengas el heroe, muestra su nombre, alias, publisher, imagen,
  // descripcion y la lista de sus poderes.

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/layouts';
import * as HeroesService from '../services/heroes-service';

function HeroDetailPage() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    async function fetchHero() {
      try {
        const hero = await HeroesService.getHero(id);
        setHero(hero);
      } catch (error) {
        console.error(error);
      }
    }
    fetchHero();
  }, [id]);

  if (!hero) {
    return (
      <PageLayout>
        <p>Cargando...</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout jumbotron={{ title: hero.name, subtitle: hero.alias }}>
      <div className="card border-0 shadow-sm p-4 bg-white" style={{ borderRadius: '16px' }}>
        <div className="row g-4 align-items-start">

          <div className="col-10 col-md-4 mx-auto">
            <img 
              src={hero.image} 
              className="img-fluid rounded shadow-sm border" 
              alt={hero.name} 
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>

          <div className="col-md-8">
            <div className="mb-3">
              <span className="badge text-bg-secondary px-3 py-2 fs-6 rounded-pill">
                {hero.publisher}
              </span>
            </div>
            <h4 className="fw-bold text-dark mb-3">Biografía</h4>
            <p className="text-secondary lh-lg fs-5" style={{ textAlign: 'justify' }}>
              {hero.description}
            </p>
            
            <hr className="my-4 text-muted" />

            <h5 className="fw-bold text-dark mb-3">Poderes y Habilidades</h5>
            <div className="d-flex flex-wrap gap-2">
              {hero.powers.map((power) => (
                <span 
                  key={power} 
                  className="badge bg-primary bg-gradient px-3 py-2 fs-6 fw-semibold text-capitalize rounded-pill shadow-xs"
                >
                  {power}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default HeroDetailPage;
