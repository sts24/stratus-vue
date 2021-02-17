<template>
  <div id="app">
    <Heading />
    <main className="data-grid">
      <Current />
      <Hourly />
      <Forecast />
    </main>
  </div>
</template>

<script>
import Heading from './components/Heading.vue'
import Current from './components/Current.vue'
import Hourly from './components/Hourly.vue'
import Forecast from './components/Forecast.vue'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Heading,
    Current,
    Hourly,
    Forecast
  },
  methods: {
    ...mapActions([ 'getWeatherData' ])
  },
  mounted(){
    this.getWeatherData();
  }
}
</script>

<style>

</style>
