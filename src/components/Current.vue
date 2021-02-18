<template>
  <section class="panel current-section" >

	<div class="current-conditions" v-if="current.data">
		Currently {{ current.data.shortForecast }} at {{ current.data.temperature }}&#8457; with winds at {{ current.data.windSpeed }} {{ current.data.windDirection}}
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
	.current-conditions {
		font-family: var(--heading-font);
		font-size: 1.5rem;
	}
</style>