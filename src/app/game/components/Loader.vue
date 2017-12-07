<template>
  <v-card flat class="pt-2">
    <v-progress-linear
      v-model="value"
      :active="show"
      color="blue">
    </v-progress-linear>
  </v-card>
</template>

<script>
export default {
  name: 'Loader',

  props: []
}
</script>

