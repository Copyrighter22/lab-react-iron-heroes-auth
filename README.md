![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Iron Heroes Auth

:::info

  :computer: **Activity Type:** Individual

:::

<br>

## Introduccion

En este lab vas a construir una pequena aplicacion de React llamada **Iron Heroes**: un
catalogo de superheroes con registro y login simulados. No necesitas backend real: usamos
**MSW (Mock Service Worker)** para interceptar las peticiones HTTP y responder con datos
falsos guardados en `localStorage`.

Al terminar este lab seras capaz de:

- Construir formularios con **react-hook-form** (validacion y errores de servidor).
- Consumir una API con **axios** desde una capa de servicios.
- Navegar entre paginas con **react-router-dom** (`Routes`, `Link`, `useNavigate`,
  `useParams`, `useSearchParams`).
- Separar componentes en presentacionales (list/item) y contenedores (pages).

## Requirements

- Haz **fork** de este repositorio.
- **Clona** tu fork:

  ```bash
  git clone https://github.com/IronPTSolutions/lab-react-iron-heroes-auth.git
  ```

- Instala las dependencias:

  ```bash
  npm install
  ```

- El service worker de MSW ya viene incluido (`public/mockServiceWorker.js`). Si al arrancar
  ves un aviso de version desactualizada, vuelve a generarlo:

  ```bash
  npx msw init public/
  ```

- Arranca la app:

  ```bash
  npm run dev
  ```

## Submission

- Cuando termines, ejecuta:

  ```bash
  git add .
  git commit -m "done"
  git push origin main
  ```

- Crea un **Pull Request** para que tus TAs puedan revisar tu trabajo.
- Nombra el PR asi (individual): `MIA-PTWD-tunombre-react-iron-heroes-auth`.

## Starter code

El starter ya incluye, listo para usar y **que NO debes tocar**:

- `src/mock/index.js` -> la API simulada (`POST /users`, `POST /login`, `GET /heroes`,
  `GET /heroes/:id`) con 10 heroes de ejemplo.
- `src/services/auth-service.js` y `src/services/heroes-service.js` -> la capa de axios.
- `src/main.jsx`, `src/App.jsx` y las rutas.
- El layout, la navbar y el jumbotron.

Tu trabajo es completar los componentes y paginas marcados con `// TODO`.

## Iterations

### Iteration 1 | Registro

Completa `src/components/auth/register-form/register-form.jsx`:

- Usa **react-hook-form** (`useForm({ mode: 'all' })`).
- Campos: `name`, `email`, `username`, `password`, todos obligatorios.
- Al enviar, llama a `AuthService.register(user)` (hace `POST /users`).
- Si el registro va bien, redirige a `/login` con `useNavigate`.
- Si el servidor responde 400, mapea `error.response.data.errors` a los inputs con
  `setError(...)` para mostrar el mensaje de error de cada campo.

### Iteration 2 | Login

Completa `src/components/auth/login-form/login-form.jsx`:

- Campos `username` y `password`.
- Al enviar, llama a `AuthService.login(credentials)` (hace `POST /login`), que devuelve
  `{ user, token }`.
- Guarda `token` y `user` en `localStorage`.
- Redirige a `/heroes`.
- Si el servidor responde 401, muestra el error de credenciales con `setError`.

> Recuerda: para hacer login primero tienes que haberte registrado en la Iteration 1.

### Iteration 3 | Listado de heroes con buscador

Completa `src/pages/heroes-page.jsx` y los componentes de `src/components/heroes/`:

- En `heroes-page.jsx`, lee el parametro `name` con `useSearchParams` y, en un `useEffect`,
  llama a `HeroesService.listHeroes({ name })`.
- `heroes-finder.jsx`: input controlado que escribe el parametro de busqueda con
  `setSearchParams({ name })`.
- `heroes-list.jsx`: recorre los heroes y renderiza un `HeroesItem` por cada uno.
- `heroes-item.jsx`: card con imagen, nombre y alias, envuelta en un `Link` hacia
  `/heroes/:id`.

### Iteration 4 | Detalle del heroe

Completa `src/pages/hero-detail-page.jsx`:

- Lee el `id` de la URL con `useParams`.
- En un `useEffect`, llama a `HeroesService.getHero(id)`.
- Muestra nombre, alias, publisher, imagen, descripcion y la lista de poderes.

### Iteration 5 | Bonus

Elige uno o varios:

- **Rutas protegidas**: crea un componente `PrivateRoute` que, si no hay `token` en
  `localStorage`, redirija a `/login` (usa `<Navigate to="/login" />`). Protege `/heroes`
  y `/heroes/:id`.
- **Logout**: anade un boton en la navbar que borre `token` y `user` de `localStorage` y
  redirija a `/login`.
- **Persistir sesion en la navbar**: muestra "Login/Register" o el nombre del usuario y
  "Logout" segun si hay sesion activa.

Happy coding! :heart:
