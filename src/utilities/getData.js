import axios from "axios";

export const GetLocation = async () => {
	return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((location) => {

		let lat = location.coords.latitude.toFixed(4);
		let long = location.coords.longitude.toFixed(4);

		const newCoords = lat + ',' + long;

		resolve(newCoords);
		return newCoords;

        }, () => {
          reject("Please enable location in your browser.");
        });
    });
}

export const GetNWSData = async (coords) => {

	return new Promise((resolve, reject) => {
		
		axios.get('https://api.weather.gov/points/' + coords)
			.then(response => {

				resolve(response.data.properties);

				return response.data.properties;
			})
			.catch(() => {
				reject("The National Weather Service could not be reached.");
			});

	});

}

export const GetForecast = async (apiEndpoint) => {

	return new Promise((resolve, reject) => {
		axios.get(apiEndpoint)
			.then(response => {

				resolve(response.data.properties);

				return response.data.properties
			})
			.catch(() => {
			

				reject("Forecast data could not be reached.");
			});
	});
	
}



export const GetHourly = async(apiEndpoint) => {

	return new Promise((resolve, reject) => {
		axios.get(apiEndpoint)
			.then(response => {

				resolve(response.data.properties);

			})
			.catch(() => {
				resolve();
				reject("Hourly forecast data could not be reached.");
			});
	})

}



export const GetAlerts = async(apiEndpoint) => {

	const forecastZone = apiEndpoint.split('/');
	const zoneID = forecastZone[forecastZone.length - 1];

	return new Promise((resolve, reject) => {
		axios.get('https://api.weather.gov/alerts/active/zone/'+zoneID)
			.then(response => {
				resolve(response.data);
			})
			.catch(() => {
				reject("Area alerts could not be reached.");
			});
	})

}