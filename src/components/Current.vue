<template>
  <div>

	<div v-if="current.data">
		<h2>{{ current.data.shortForecast }}</h2>
	</div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Current',
	computed: mapState([
		'current',
	])
}
</script>

<style>

</style>