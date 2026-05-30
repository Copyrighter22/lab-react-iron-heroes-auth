import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

const baseMockDomain = 'https://api.ironheroes.mock.org';

const LS_USERS_KEY = 'users';
const users = self.localStorage.getItem(LS_USERS_KEY)
  ? JSON.parse(self.localStorage.getItem(LS_USERS_KEY))
  : [];

const heroes = [
  {
    id: '1',
    name: 'Superman',
    alias: 'Clark Kent',
    publisher: 'DC Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/644-superman.jpg',
    powers: ['Super fuerza', 'Vuelo', 'Vision de calor', 'Invulnerabilidad'],
    description: 'El ultimo hijo de Krypton, protector de Metropolis y simbolo de esperanza.'
  },
  {
    id: '2',
    name: 'Batman',
    alias: 'Bruce Wayne',
    publisher: 'DC Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/70-batman.jpg',
    powers: ['Inteligencia', 'Artes marciales', 'Gadgets', 'Sigilo'],
    description: 'El Caballero Oscuro de Gotham City, detective y maestro de la estrategia.'
  },
  {
    id: '3',
    name: 'Wonder Woman',
    alias: 'Diana Prince',
    publisher: 'DC Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/720-wonder-woman.jpg',
    powers: ['Super fuerza', 'Lazo de la verdad', 'Combate', 'Vuelo'],
    description: 'Princesa amazona de Themyscira y guerrera legendaria.'
  },
  {
    id: '4',
    name: 'Spider-Man',
    alias: 'Peter Parker',
    publisher: 'Marvel Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/620-spider-man.jpg',
    powers: ['Agilidad', 'Sentido aracnido', 'Trepar paredes', 'Telaranas'],
    description: 'El amistoso vecino Spider-Man, protector de Nueva York.'
  },
  {
    id: '5',
    name: 'Iron Man',
    alias: 'Tony Stark',
    publisher: 'Marvel Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/346-iron-man.jpg',
    powers: ['Armadura', 'Genio tecnologico', 'Vuelo', 'Repulsores'],
    description: 'Genio, millonario, playboy y filantropo dentro de una armadura.'
  },
  {
    id: '6',
    name: 'Captain America',
    alias: 'Steve Rogers',
    publisher: 'Marvel Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/149-captain-america.jpg',
    powers: ['Super soldado', 'Escudo de vibranium', 'Liderazgo', 'Resistencia'],
    description: 'El primer Vengador, simbolo de libertad y justicia.'
  },
  {
    id: '7',
    name: 'Thor',
    alias: 'Thor Odinson',
    publisher: 'Marvel Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/659-thor.jpg',
    powers: ['Dios del trueno', 'Mjolnir', 'Super fuerza', 'Inmortalidad'],
    description: 'El dios asgardiano del trueno y miembro de los Vengadores.'
  },
  {
    id: '8',
    name: 'The Flash',
    alias: 'Barry Allen',
    publisher: 'DC Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/263-flash.jpg',
    powers: ['Super velocidad', 'Fuerza de la velocidad', 'Viaje en el tiempo'],
    description: 'El hombre mas rapido vivo, protector de Central City.'
  },
  {
    id: '9',
    name: 'Black Widow',
    alias: 'Natasha Romanoff',
    publisher: 'Marvel Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/107-black-widow.jpg',
    powers: ['Espionaje', 'Artes marciales', 'Armas', 'Sigilo'],
    description: 'Espia de elite y agente de S.H.I.E.L.D., miembro de los Vengadores.'
  },
  {
    id: '10',
    name: 'Aquaman',
    alias: 'Arthur Curry',
    publisher: 'DC Comics',
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/32-aquaman.jpg',
    powers: ['Comunicacion marina', 'Super fuerza', 'Natacion', 'Tridente'],
    description: 'Rey de la Atlantida y protector de los oceanos.'
  }
];

// POST /users -> register a new user
const handleUserRegister = http.post(`${baseMockDomain}/users`, async ({ request }) => {
  const user = await request.json();
  console.log('mock user register received', user);

  const isAlreadyRegistered = users.some(
    (registeredUser) => registeredUser.username === user.username || registeredUser.email === user.email
  );

  if (isAlreadyRegistered) {
    return HttpResponse.json(
      {
        message: 'Invalid user register',
        errors: {
          username: 'Username or email already registered'
        }
      },
      { status: 400 }
    );
  }

  user.id = self.crypto.randomUUID();
  users.push(user);
  self.localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));

  const safeUser = { ...user };
  delete safeUser.password;
  return HttpResponse.json(safeUser, { status: 201 });
});

// POST /login -> validate credentials, return { user, token }
const handleLogin = http.post(`${baseMockDomain}/login`, async ({ request }) => {
  const { username, password } = await request.json();

  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!foundUser) {
    return HttpResponse.json(
      {
        message: 'Invalid credentials',
        errors: {
          username: 'Usuario o contrasena incorrectos'
        }
      },
      { status: 401 }
    );
  }

  const safeUser = { ...foundUser };
  delete safeUser.password;
  const token = self.crypto.randomUUID();
  return HttpResponse.json({ user: safeUser, token }, { status: 200 });
});

// GET /heroes?name= -> list with case-insensitive contains filter
const handleListHeroes = http.get(`${baseMockDomain}/heroes`, ({ request }) => {
  const url = new URL(request.url);
  const name = (url.searchParams.get('name') ?? '').toLowerCase().trim();

  const result = name
    ? heroes.filter(
        (hero) =>
          hero.name.toLowerCase().includes(name) ||
          hero.alias.toLowerCase().includes(name)
      )
    : heroes;

  return HttpResponse.json(result, { status: 200 });
});

// GET /heroes/:id -> single hero or 404
const handleGetHero = http.get(`${baseMockDomain}/heroes/:id`, ({ params }) => {
  const hero = heroes.find((hero) => hero.id === params.id);

  if (!hero) {
    return HttpResponse.json({ message: 'Hero not found' }, { status: 404 });
  }

  return HttpResponse.json(hero, { status: 200 });
});

const worker = setupWorker(
  handleUserRegister,
  handleLogin,
  handleListHeroes,
  handleGetHero,
);

export default worker;
