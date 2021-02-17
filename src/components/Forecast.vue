<template>
	<section class="panel forecast-section">
		<header class="panel-header">Daily Forecast</header>

		<ul v-if="forecast.data">
			<li v-for="f in forecast.data" :key="f.startTime">

				<div className="forecast-day">{{ f.name }}</div>
				<div className="forecast-desc">
					{{ f.shortForecast }}
				</div>
				<div className="forecast-temp">{{ f.temperature }}&#8457;</div>
				<button className="forecast-extra-toggle">More Info</button>

				<aside className="forecast-extra">
					<div className="forecast-wind"><strong>Wind</strong> {{ f.windSpeed }} {{ f.windDirection }}</div>
					<div className="forecast-full-desc"><strong>Forecast Detail</strong> {{ f.detailedForecast }}</div>
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