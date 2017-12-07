<template>
  <v-card flat class="pt-2" v-if="this.propShowButtons">
    <v-btn 
      :class="{ active: propIsActiveNextPage, colorButtonPrevious: propBtnPreviousColor }"
      :disabled="availableToPreviousPage" 
      @click="previousPage">
      Previous
    </v-btn>
    <v-btn
      :class="{ active: propIsActivePreviousPage, colorButtonNext: propBtnNextColor }"
      :disabled="availableToNextPage" 
      @click="nextPage">
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
    'propBtnNextColor'
  ]
}
</script>
