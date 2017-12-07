export default {
  'SET_PLANETS' (state, obj) {
    state.planets = obj.planets
  },
  'SET_NEXTPLANET' (state, obj) {
    state.nextPlanet = obj.nextPlanet
  },
  'SET_PREVIOUSPLANET' (state, obj) {
    state.previousPlanet = obj.previousPlanet
  }
}
