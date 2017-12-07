<template>
  <div>
    <v-card-text class="body-1 py-0">
      <strong>POPULATION:</strong> 
      {{ population }}
    </v-card-text>

    <v-card-text class="body-1">
      <strong>CLIMATE:</strong> 
      {{ climate }}
    </v-card-text>

    <v-card-text class="body-1 py-0">
      <strong>TERRAIN:</strong> 
      {{ terrain }}
    </v-card-text>

    <v-card-text class="body-1 pt-4 py-0">
      <strong>FEATURES IN</strong>
      {{ qntFilms }} 
      <strong>FILMS</strong>
    </v-card-text>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NamePlanet',

  props: ['namePlanet', 'population', 'climate', 'terrain', 'qntFilms'],

  components: {
    ...mapGetters('game', ['getName'])
  }

}
</script>
