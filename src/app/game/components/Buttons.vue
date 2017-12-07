<template>
  <v-card flat class="pt-2" v-if="this.propShowButtons">
    <v-btn 
      :class="{ active: propIsActiveNextPage, colorButtonPrevious: propBtnPreviousColor }"
      :disabled="propAvailableToPreviousPage" 
      @click="clickPreviousPage">
      Previous
    </v-btn>
    <v-btn
      :class="{ active: propIsActivePreviousPage, colorButtonNext: propBtnNextColor }"
      :disabled="propAvailableToNextPage" 
      @click="clickNextPage">
      Next
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'Buttons',

  props: [
    'propShowButtons',
    'propIsActivePreviousPage',
    'propIsActiveNextPage',
    'propBtnPreviousColor',
    'propBtnNextColor',
    'propAvailableToPreviousPage',
    'propAvailableToNextPage'
  ],

  methods: {
    clickPreviousPage () {
      this.$emit('onPreviousPage')
    },

    clickNextPage () {
      this.$emit('onNextPage')
    }
  }
}
</script>

<style scoped>
.colorButtonPrevious {
  color: white;
  background-color: red;
}

.colorButtonNext {
  color: white;
  background-color: green;
}

.active {
  color: white;
  background-color: gray;
}
</style>