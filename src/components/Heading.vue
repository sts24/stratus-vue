<template>
	<div class="current-location-heading" v-if="location.city">
		<h1><span>Weather for </span>{{ location.city }}, {{ location.state }}</h1>
	</div>
</template>

<script>

import { mapState } from 'vuex'

export default {
	name: 'Heading',
	computed: mapState([
		'location',
	])
}
</script>

<style>
	.current-location-heading {
		margin: 0 0 1rem 0;
	}

	.current-location-heading h1 {
		font-family: var(--heading-font);
		font-size: 3rem;
		line-height: 1em;
		margin: 0;
	}
</style>