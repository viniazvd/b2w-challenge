<template>
  <div>
    <v-card flat class="mt-3 mb-3" v-if="!this.qntFilms">
      (don't featured in anyone film)
    </v-card>

    <v-btn 
      v-if="this.qntFilms"
      color="black white--text" 
      class="mt-3 mb-3"
      @click.native.stop="dialog = true">
      check films
    </v-btn>

    <v-dialog v-model="dialog" max-width="380">
      
      <v-card class="text-xs-center pt-2 pb-2" color="grey lighten-2">
        
        <ul>
          <li v-for="(film, index) in this.getFilms" :key="index">
            <a href="javascript:void(0);">{{ film }}</a>
          </li>
        </ul>

        <v-btn color="black white--text" @click.native="dialog = false">close</v-btn>

      </v-card>

    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'GetFilmsDialog',

  props: ['qntFilms', 'getFilms'],

  data () {
    return {
      dialog: false
    }
  }
}
</script>
