<template>
  <div>
    <v-card class="pt-1" color="black white--text">
      <v-card-text class="display-1">{{ namePlanet }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NamePlanet',

  props: ['namePlanet'],

  components: {
    ...mapGetters('game', ['getName'])
  }

}
</script>
