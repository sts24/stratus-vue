<template>
  <section class="panel current-section" >
	<header class="panel-header">Current Conditions</header>

	<div class="current-conditions" v-if="current.data">
		<div className="forecast-day">{{ current.data.name }}</div>
		<div className="forecast-desc">{{ current.data.shortForecast }}</div>
		<div className="forecast-temp">{{ current.data.temperature }}&#8457;</div>
		<div className="forecast-wind">{{ current.data.windSpeed }} {{ current.data.windDirection}}</div>
	</div>

  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Current',
	computed: mapState([
		'current'
	])
}
</script>

<style>

</style>