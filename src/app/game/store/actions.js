import axios from 'axios'

export const setPlanetDataOfPage = async ({ commit }, indexOrEndPoint) => {
  let planets
  if (indexOrEndPoint === 1) {
    planets = (await axios.get(`https://swapi.co/api/planets/?page=${indexOrEndPoint}`)).data.results
  } else {
    planets = (await axios.get(`${indexOrEndPoint}`)).data.results
  }
  commit('SET_PLANETS', { planets })
}

export const setNextPlanet = async ({ commit }, indexPage) => {
  const nextPlanet = (await axios.get(`https://swapi.co/api/planets/?page=${indexPage}`)).data.next
  commit('SET_NEXTPLANET', { nextPlanet })
}

export const setPreviousPlanet = async ({ commit }, indexPage) => {
  const previousPlanet = (await axios.get(`https://swapi.co/api/planets/?page=${indexPage}`)).data.previous
  commit('SET_PREVIOUSPLANET', { previousPlanet })
}
