<template>
	<section class="panel forecast-section">
		<header class="panel-header">Daily Forecast</header>

		<ul v-if="forecast.data">
			<li v-for="f in forecast.data" :key="f.startTime">

				<div class="forecast-day">{{ f.name }}</div>
				<div class="forecast-desc">
					{{ f.shortForecast }}
				</div>
				<div class="forecast-temp">{{ f.temperature }}&#8457;</div>
				<button class="forecast-extra-toggle">More Info</button>

				<aside class="forecast-extra">
					<div class="forecast-wind"><strong>Wind</strong> {{ f.windSpeed }} {{ f.windDirection }}</div>
					<div class="forecast-full-desc"><strong>Forecast Detail</strong> {{ f.detailedForecast }}</div>
				</aside>

			</li>
		</ul>

	</section>
</template>

<script>

import { mapState } from 'vuex'

export default {
	name: 'Forecast',
	computed: mapState([
		'forecast'
	])
}
</script>

<style>

</style>