import fastify from 'fastify';
import cors from '@fastify/cors';

const server = fastify({ logger: true });
server.register(cors, {
    origin: '*',
});

const teams = [{
    "id": 1,
    "name": "Mercedes",
    "base": "Brackley, United Kingdom",
}, {
    "id": 2,
    "name": "Ferrari",
    "base": "Maranello, Italy",
}, {
    "id": 3,
    "name": "Red Bull",
    "base": "Milton Keynes, United Kingdom",
}, {
    "id": 4,
    "name": "McLaren",
    "base": "Woking, United Kingdom",
}, {
    "id": 5,
    "name": "Racing Bulls",
    "base": "Faenza, Italy",
}, {
    "id": 6,
    "name": "Alpine",
    "base": "Enstone, United Kingdom",
}, {
    "id": 7,
    "name": "Haas",
    "base": "Kannapolis, United States",
}, {
    "id": 8,
    "name": "Audi",
    "base": "Hinwil, Switzerland",
}, {
    "id": 9,
    "name": "Williams",
    "base": "Grove, United Kingdom",
}, {
    "id": 10,
    "name": "Aston Martin",
    "base": "Silverstone, United Kingdom",
}, {
    "id": 11,
    "name": "Cadillac",
    "base": "Charlotte, United States",
}];

const drivers = [{
    "id": 1,
    "name": "George Russell",
    "team": "Mercedes",
}, {
    "id": 2,
    "name": "Kimi Antonelli",
    "team": "Mercedes",
}, {
    "id": 3,
    "name": "Charles Leclerc",
    "team": "Ferrari",
}, {
    "id": 4,
    "name": "Lewis Hamilton",
    "team": "Ferrari",
}, {
    "id": 5,
    "name": "Lando Norris",
    "team": "McLaren",
}, {
    "id": 6,
    "name": "Oscar Piastri",
    "team": "McLaren",
}, {
    "id": 7,
    "name": "Max Verstappen",
    "team": "Red Bull",
}, {
    "id": 8,
    "name": "Isack Hadjar",
    "team": "Red Bull",
}, {
    "id": 9,
    "name": "Liam Lawson",
    "team": "Racing Bulls",
}, {
    "id": 10,
    "name": "Arvid Lindblad",
    "team": "Racing Bulls",
}, {
    "id": 11,
    "name": "Pierre Gasly",
    "team": "Alpine",
}, {
    "id": 12,
    "name": "Franco Colapinto",
    "team": "Alpine",
}, {
    "id": 13,
    "name": "Esteban Ocon",
    "team": "Haas",
}, {
    "id": 14,
    "name": "Oliver Bearman",
    "team": "Haas",
}, {
    "id": 15,
    "name": "Nico Hulkenberg",
    "team": "Audi",
}, {
    "id": 16,
    "name": "Gabriel Bortoleto",
    "team": "Audi",
}, {
    "id": 17,
    "name": "Carlos Sainz",
    "team": "Williams",
}, {
    "id": 18,
    "name": "Alexander Albon",
    "team": "Williams",
}, {
    "id": 19,
    "name": "Fernando Alonso",
    "team": "Aston Martin",
}, {
    "id": 20,
    "name": "Lance Stroll",
    "team": "Aston Martin",
}, {
    "id": 21,
    "name": "Sergio Perez",
    "team": "Cadillac",
}, {
    "id": 22,
    "name": "Valtteri Bottas",
    "team": "Cadillac",
}];

server.get('/teams', async (request, response) => {
    response.type('application/json').code(200);
    return teams;
});

server.get('/drivers', async (request, response) => {
    response.type('application/json').code(200);
    return drivers;
});

interface TeamParams {
    id: string;
}

interface DriverParams {
    id: string;
}

server.get<{Params: TeamParams}>('/teams/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find(team => team.id === id);

    if (!team) {
        response.status(404).send({ error: 'Team not found' });
        return;
    } 
    response.type('application/json').code(200);
    return team;
});

server.get<{Params: DriverParams}>('/drivers/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(driver => driver.id === id);

    if (!driver) {
        response.status(404).send({ error: 'Driver not found' });
        return;
    }
    response.type('application/json').code(200);
    return driver;
});


server.listen({ port: Number(process.env.PORT) }, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});