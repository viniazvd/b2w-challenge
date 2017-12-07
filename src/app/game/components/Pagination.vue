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

  props: ['propIndexPlanet', 'lengthPlanet', 'indexPlanet'],

  methods: {
    changeIndexPlanet () {
      if (event.target.innerHTML === 'chevron_left') {
        const index = this.indexPlanet
        const previous = index - 1
        this.$emit('update:propIndexPlanet', previous)
        return false
      }

      if (event.target.innerHTML === 'chevron_right') {
        const index = this.indexPlanet
        const next = index + 1
        this.$emit('update:propIndexPlanet', next)
        return false
      }

      this.$emit('update:propIndexPlanet', parseInt(event.target.innerHTML))
    }
  }
}
</script>
