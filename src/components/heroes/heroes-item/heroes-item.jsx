import { Link } from "react-router-dom";

function HeroesItem({ hero: { id, name, alias, image } }) {
  return (
    <Link to={`/heroes/${id}`} className="text-decoration-none text-reset">
      <div className="card text-bg-dark border-0 shadow-sm h-100 overflow-hidden" style={{ width: '14rem', borderRadius: '12px' }}>
        
        {/* Imagen con un ligero filtro oscuro por defecto */}
        <img 
          src={image} 
          className="card-img w-100" 
          alt={name} 
          style={{ height: '18rem', objectFit: 'cover', opacity: '0.85' }} 
        />
        
        <div 
          className="card-img-overlay d-flex flex-column justify-content-end p-3"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)'
          }}
        >
          <h5 className="card-title fw-bold text-white mb-1 text-truncate">{name}</h5>
          <span className="card-text text-light-50 small text-truncate">
            {alias || 'Héroe Secreto'}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default HeroesItem;