<template>
  
	<v-container>
    <v-layout row wrap justify-center class="mt-5">
      <v-flex xs4 class="text-xs-center">

        <NumPage :numPage="indexPage"></NumPage> 
        
        <NamePlanet :namePlanet="this.getName[this.indexPagination]"></NamePlanet> 

        <v-card class="pb-4 pt-4" color="grey lighten-4">
          <DataPlanet 
            :population="this.getPopulation[this.indexPagination]"
            :climate="this.getClimate[this.indexPagination]"
            :terrain="this.getTerrain[this.indexPagination]"
            :qntFilms="this.getQntFilms">
          </DataPlanet> 

          <GetFilmsDialog :qntFilms="this.getQntFilms" :getFilms="this.getFilms[this.indexPagination]"></GetFilmsDialog>
          
          <Pagination :propIndexPlanet.sync="indexPlanet" :indexPlanet="indexPlanet" :lengthPlanet="this.planets.length"></Pagination>
        </v-card>

        <!-- <Buttons 
          :propShowButtons="showButtons"
          :propIsActivePreviousPage="isActivePreviousPage"
          :propIsActiveNextPage="isActiveNextPage"
          :propBtnPreviousColor="btnPreviousColor"
          :propBtnNextColor="btnNextColor">
        </Buttons> -->

        <v-card flat class="pt-2" v-if="this.showButtons">
          <v-btn 
            :class="{ active: isActiveNextPage, colorButtonPrevious: btnPreviousColor }"
            :disabled="availableToPreviousPage" 
            @click="previousPage">
            Previous
          </v-btn>
          <v-btn
            :class="{ active: isActivePreviousPage, colorButtonNext: btnNextColor }"
            :disabled="availableToNextPage" 
            @click="nextPage">
            Next
          </v-btn>
        </v-card>

        <!-- <Loader :propValue.sync="value"></Loader> -->

        <v-card flat class="pt-2">
          <v-progress-linear
            v-model="value"
            :active="show"
            color="blue">
          </v-progress-linear>
        </v-card>

      </v-flex>

    </v-layout>
    
    <!-- vuetify gambi, fix later -->
    <v-app></v-app> 

	</v-container>

</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import NumPage from './NumPage'
import NamePlanet from './NamePlanet'
import DataPlanet from './DataPlanet'
import GetFilmsDialog from './GetFilmsDialog'
import Pagination from './Pagination'
import Buttons from './Buttons'
import Loader from './Loader'

export default {

  components: {
    NumPage,
    NamePlanet,
    DataPlanet,
    GetFilmsDialog,
    Pagination,
    Buttons,
    Loader
  },

  data () {
    return {
      indexPlanet: 0,
      indexPage: 1,
      isActiveNextPage: false,
      isActivePreviousPage: false,
      value: 0,
      query: false,
      show: false,
      interval: {},
      showButtons: true
    }
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  mounted () {
    this.setPlanetDataOfPage(this.indexPage)
    this.setNextPlanet(this.indexPage)
    this.setPreviousPlanet(this.indexPage)
  },

  methods: {
    ...mapActions('game', ['setPlanetDataOfPage', 'setNextPlanet', 'setPreviousPlanet']),

    nextPlanet () {
      this.indexPlanet++
    },

    previousPlanet () {
      this.indexPlanet--
    },

    nextPage () {
      this.showButtons = false
      this.indexPlanet = 0
      this.loader()
      this.indexPage++
      this.setPlanetDataOfPage(this.getNextPlanet)
      this.setNextPlanet(this.indexPage)
      this.setPreviousPlanet(this.indexPage)
    },

    previousPage () {
      this.showButtons = false
      this.indexPlanet = 0
      this.loader()
      this.indexPage--
      this.setPlanetDataOfPage(this.getPreviousPlanet)
      this.setNextPlanet(this.indexPage)
      this.setPreviousPlanet(this.indexPage)
    },

    loader () {
      this.value = 0
      this.show = true

      this.interval = setInterval(() => {
        if (this.value === 100) {
          clearInterval(this.interval)
          this.show = false
          this.showButtons = true
        } else {
          this.value += 25
        }
      }, 350)
    }
  },

  computed: {
    ...mapState('game', ['planets']),
    ...mapGetters('game', ['getNextPlanet', 'getPreviousPlanet', 'getName', 'getPopulation', 'getClimate', 'getTerrain', 'getFilms']),

    indexPagination () {
      return this.indexPlanet === 0 ? this.indexPlanet : this.indexPlanet - 1
    },

    availableToNextPage () {
      if (this.getNextPlanet === null) return true
    },

    availableToPreviousPage () {
      if (this.indexPage === 1) return true
    },

    btnPreviousColor () {
      if (this.indexPage !== 1) return true
    },

    btnNextColor () {
      if (this.getNextPlanet !== null) return true
    },

    getQntFilms () {
      if (this.getFilms[this.indexPagination]) return this.getFilms[this.indexPagination].length
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
