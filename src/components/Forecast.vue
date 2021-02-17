<template>
  <div>

	<ul v-if="forecast.data">
		<li v-for="f in forecast.data" :key="f.startTime">
			{{ f.detailedForecast }}
		</li>
	</ul>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
	name: 'Forecast',
	computed: mapState([
		'forecast',
	])
}
</script>

<style>

</style>