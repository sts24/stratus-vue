<template>
	<section class="panel hourly-section">
		<header class="panel-header">Hourly Forecast</header>

		<ul v-if="hourly.data">
			<li v-for="h in hourly.data" :key="h.startTime">
				
				<time>{{ formatTime(h.startTime) }}</time>
				<div class="hourly-desc">
					{{ h.shortForecast }}
				</div>
				<div class="hourly-temp">{{ h.temperature }}&#8457;</div>
				<div class="hourly-wind">{{ h.windSpeed }} {{ h.windDirection }}</div>

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
	]),
	methods: {
		formatTime(data) {
			let newDate = new Date(data);

			return newDate.toLocaleTimeString([], {
				hour: 'numeric'
			});
		}
	}
}
</script>

<style>

</style>