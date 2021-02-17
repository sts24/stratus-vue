<template>
	<div>
		<ul v-if="hourly.data">
			<li v-for="h in hourly.data" :key="h.startTime">
				{{ h.shortForecast }}
			</li>
		</ul>
	</div>
</template>

<script>

import { mapState } from 'vuex'

export default {
	name: 'Hourly',
	computed: mapState([
		'hourly',
	])
}
</script>

<style>

</style>