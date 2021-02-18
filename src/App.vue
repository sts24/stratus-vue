<template>
  <div id="app">
    <header class="stratus-masthead">
      <Heading />
      <Current />
    </header>
    <main class="forecast-grid">
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

:root {
  --body-font: sans-serif;
  --heading-font: Avenir, Helvetica, Arial, sans-serif;
}

body {
  padding: 2rem;
  margin: 0;
  font-family: var(--body-font);
  line-height: 1em;
}


.stratus-masthead {
  margin: 0 auto 4rem 0;
}


.forecast-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}


.panel-header {
  font-family: var(--heading-font);
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 2rem 0;
}


</style>
