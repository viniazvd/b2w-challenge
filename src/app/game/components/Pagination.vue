<template>
  <div>
    <v-pagination 
      :length="this.lengthPlanet" 
      :value="this.propIndexPlanet"
      @input="this.changeIndexPlanet"
      :total-visible="6"
      color="grey darken-1">
    </v-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: ['propIndexPlanet', 'lengthPlanet'],

  methods: {
    changeIndexPlanet () {
      this.$emit('update:propIndexPlanet', parseInt(event.target.innerHTML))
    }
  }
}
</script>
