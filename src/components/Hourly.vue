<template>
	<section class="panel hourly-section">
		<header class="panel-header">Hourly Forecast</header>

		<ForecastChart :chart-data="chartData" :options="options" :chart-id="hourly-forcast-chart" :height="300"  />

		<!-- <ul v-if="hourly.data">
			<li v-for="h in hourly.data" :key="h.startTime">
				
				<time>{{ formatTime(h.startTime) }}</time>
				<div class="hourly-desc">
					{{ h.shortForecast }}
				</div>
				<div class="hourly-temp">{{ h.temperature }}&#8457;</div>
				<div class="hourly-wind">{{ h.windSpeed }} {{ h.windDirection }}</div>

			</li>
		</ul> -->
	</section>
</template>

<script>

import { mapState } from 'vuex'

import ForecastChart from './ForecastChart'

export default {
	name: 'Hourly',
	data(){
		return {
			chartData: {},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				aspectRatio: 12,
				legend: {
					display: false
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 20,
						bottom: 20
					}
				},
				scales: {
					yAxes: [{
						gridLines: {
							drawTicks: false,
							display: false
						},
						ticks: {
							display: false
						}
					}],
					xAxes: [{
						gridLines: {
							display: true,
							drawTicks: true
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
			let temperatureArray = [];
		
			for(const i in newData){
				chartLabels.push(this.formatTime(newData[i].startTime));
				temperatureArray.push(newData[i].temperature);
			}

			this.chartData = {
				labels: chartLabels,
				datasets: [
					{
						label: 'Temperature',
						borderColor: '#df552a',
						fill: false,
						borderWidth: '6',
						data: temperatureArray
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