import { rest } from 'msw';


const API_URL = 'https://swapi.dev/api';


export const getStarshipById = () => rest.get(`${API_URL}/starships/:id/`, (req, res, ctx) => {
    return res(ctx.json({
        "name": "Imperial shuttle", 
        "model": "Lambda-class T-4a shuttle", 
        "manufacturer": "Sienar Fleet Systems", 
        "cost_in_credits": "240000", 
        "length": "20", 
        "max_atmosphering_speed": "850", 
        "crew": "6", 
        "passengers": "20", 
        "cargo_capacity": "80000", 
        "consumables": "2 months", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "50", 
        "starship_class": "Armed government transport", 
        "pilots": [
            "https://swapi.dev/api/people/1/", 
            "https://swapi.dev/api/people/13/", 
            "https://swapi.dev/api/people/14/"
        ], 
        "films": [
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/"
        ] 
    }));
});


export const getPeopleById = () => rest.get(`${API_URL}/people/:id/`, (req, res, ctx) => {
    return res(ctx.json({
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "species": [
            "https://swapi.dev/api/species/1/"
        ],
    }));
});


export const getPlanetById = () => rest.get(`${API_URL}/planets/:id/`, (req, res, ctx) => {
    return res(ctx.json({
        "name": "Tatooine"
    }));
});


export const getSpeciesById = () => rest.get(`${API_URL}/species/:id/`, (req, res, ctx) => {
    return res(ctx.json({
        "name": "-"
    }));
});


export const getMovieById = () => rest.get(`${API_URL}/films/:id/`, (req, res, ctx) => {
    return res(ctx.json({
        "title": "A New Hope", 
        "episode_id": 4, 
        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
        "director": "George Lucas", 
        "producer": "Gary Kurtz, Rick McCallum", 
        "release_date": "1977-05-25", 
    }));

});


// este método devuelve el array de las peticiones que vamos a mockear
export const getHandlers = () => [
    getStarshipById(),
    getPeopleById(),
    getPlanetById(),
    getSpeciesById(),
    getMovieById()
];