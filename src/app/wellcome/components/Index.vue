<template>
	<v-container class="mt-5">
    <v-layout row wrap class="mt-5">
      <v-flex xs4 offset-xs4 class="text-xs-center">
        <v-card class="pb-3 pt-2" color="grey lighten-4">
          <v-card-text class="title">B2W DIGITAL</v-card-text>
          <v-card-text class="title">Welcome to the StarWars Game!</v-card-text>
          <v-btn color="blue white--text" @click="next">CLICK HERE FOR START</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
	</v-container>
</template>

<script>
export default {
  name: 'wellcome',
  methods: {
    next () {
      this.$router.push('/game')
    }
  }
}
</script>