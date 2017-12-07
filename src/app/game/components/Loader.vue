<template>
  <v-card flat class="pt-2">
    <v-progress-linear
      :value="this.propValue"
      @input="this.changeIndexPlanet"
      :active="show"
      color="blue">
    </v-progress-linear>
  </v-card>
</template>

<script>
export default {
  name: 'Loader',

  props: ['propValue']
}
</script>

