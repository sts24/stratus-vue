<template>
	<section class="panel hourly-section">
		<header class="panel-header">Hourly Forecast</header>

		<ForecastChart :chart-data="chartData" :options="options" />

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

import ForecastChart from './ForecastChart'

export default {
	name: 'Hourly',
	data(){
		return {
			chartData: null,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				aspectRatio: 10,
				legend: {
					display: false
				},
				scales: {
					yAxes: [{
						ticks: {
							display: false
						}
					}]
				}
			
			}
		}
	},
	components: {
		ForecastChart
	},
	computed: mapState([
		'hourly'
	]),
	mounted(){

		//this.setupData();

	},
	watch: {
		'hourly.data': function(newData){
			this.setupData(newData);
		}
	},
	methods: {
		setupData(newData){

			let chartLabels = [];
			let chartArray = [];
		
			for(const i in newData){
				chartLabels.push(this.formatTime(newData[i].startTime));
				chartArray.push(newData[i].temperature);
			}

			this.chartData = {
				labels: chartLabels,
				datasets: [
					{
						label: 'Temperature',
						borderColor: '#df552a',
						fill: false,
						borderWidth: '12',
						data: chartArray
					}
				]
			}

		},
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