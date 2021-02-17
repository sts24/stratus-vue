<template>
	<header class="current-location-heading" v-if="location.city">
		<h1><span>Weather for </span>{{ location.city }}, {{ location.state }}</h1>
	</header>
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

</style>