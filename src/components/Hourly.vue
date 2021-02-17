<template>
	<section class="panel hourly-section">
		<header>Hourly Forecast</header>

		<ul v-if="hourly.data">
			<li v-for="h in hourly.data" :key="h.startTime">
				
				<time>{{ h.startTime }}</time>
				<div className="hourly-desc">
					{{ h.shortForecast }}
				</div>
				<div className="hourly-temp">{{ h.temperature }}&#8457;</div>
				<div className="hourly-wind">{{ h.windSpeed }} {{ h.windDirection }}</div>

			</li>
		</ul>
	</section>
</template>

<script>

import { mapState } from 'vuex'

export default {
	name: 'Hourly',
	computed: mapState([
		'hourly'
	])
}
</script>

<style>

</style>