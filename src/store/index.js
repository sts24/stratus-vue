import Vue from 'vue'
import Vuex from 'vuex'
import { GetForecast, GetLocation, GetNWSData, GetHourly, GetAlerts } from '../utilities/getData';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coords: "",
    hourly: {},
    weather: {},
    forecast: {},
    alerts: {},
    hasLocation: false,
    message: "",
    nwsAPI: {}
  },
  mutations: {
    setLocation(state, coords){
      state.coords = coords
    },
    setHourly(state, data) {
      state.hourly = data
    },
    setForecast(state, data){
      state.forecast = data;
    },
    setAlerts(state, data){
      state.alerts = data;
    },
    setAPIEndpoints(state, data){
      state.nwsAPI = data;
    }
  },
  actions: {

    getWeatherData(store){
      
      // use browser geolocation to kick things off
      GetLocation().then(result => {
        store.commit('setLocation', result);

        return result
      }).then(coords => {

        // go get the API endpoints from the NWS

        return GetNWSData(coords).then(res => {
          store.commit('setAPIEndpoints', {
            forecast: res.forecast,
            hourly: res.forecastHourly,
            forecastZone: res.forecastZone
          })
        })

      }).then(() => {

        // get daily forecast data
        return GetForecast(store.state.nwsAPI.forecast).then(res => {
          store.commit('setForecast', res);
        });

      }).then(() => {

        // get hourly forecast data
        return GetHourly(store.state.nwsAPI.hourly).then(res => {
          store.commit('setHourly', res);
        })

      }).then(() => {

        // get weather alerts data
        return GetAlerts(store.state.nwsAPI.forecastZone).then(res => {
          store.commit('setAlerts', res);
        })

      });

    }

  }
})
