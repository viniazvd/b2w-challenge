<template>
  <v-card flat class="pt-2">

    <div v-if="this.loading">
      loading, please wait a few seconds... {{ this.propValue }}%
    </div>

    <v-progress-linear
      :value="this.propValue"
      :active="this.startLoader"
      color="blue">
    </v-progress-linear>
  </v-card>
</template>

<script>
export default {
  name: 'Loader',

  props: ['propValue', 'startLoader'],

  computed: {
    loading () {
      if (this.propValue) return true
    }
  }
}
</script>

