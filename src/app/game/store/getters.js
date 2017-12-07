export const getNextPlanet = (state) => state.nextPlanet
export const getPreviousPlanet = (state) => state.previousPlanet

export const getName = (state) => state.planets.map(x => x.name)
export const getPopulation = (state) => state.planets.map(x => x.population)
export const getClimate = (state) => state.planets.map(x => x.climate)
export const getTerrain = (state) => state.planets.map(x => x.terrain)
export const getFilms = (state) => state.planets.map(x => x.films)
