export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  getResource = async (url) => {
    const res = await fetch(this._apiBase + url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  getAllPeople = async () => {
    const res = await this.getResource("/people/");
    return res.results.map(this._transformPerson);
  };

  getPersonImage = ({id}) =>{
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  };

  getStarshipImage = ({id}) =>{
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  };

  getPlanetImage = ({id}) =>{
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource("/planets/");
    return res.results.map(this._transformPlanet);
  };

   getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource("/starships/");
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starShip = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starShip);
  }

  _extractId= (item) => {
    const idRexExp = `\/([0-9]*)\/$`;
    return item.url.match(idRexExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      namufacturer: starship.namufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
