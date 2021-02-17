import Vue from 'vue'
import Vuex from 'vuex'
import { GetForecast, GetLocation, GetNWSData, GetHourly, GetAlerts } from '../utilities/getData';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: {},
    coords: "",
    hourly: {},
    forecast: {},
    alerts: {},
    nwsAPI: {}
  },
  mutations: {
    setLocation(state, data){
      state.location = data
    },
    setCoords(state, coords){
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
        store.commit('setCoords', result);

        return result
      }).then(coords => {

        // go get the API endpoints from the NWS

        return GetNWSData(coords).then(res => {

          store.commit('setLocation', {
            city: res.relativeLocation.properties.city,
            state: res.relativeLocation.properties.state
          })

          store.commit('setAPIEndpoints', {
            forecast: res.forecast,
            hourly: res.forecastHourly,
            forecastZone: res.forecastZone
          })

        })

      }).then(() => {

        // get daily forecast data
        return GetForecast(store.state.nwsAPI.forecast).then(res => {
          store.commit('setForecast', {
            'updated': res.updateTime,
            'data': res.periods
          });
        });

      }).then(() => {

        // get hourly forecast data
        return GetHourly(store.state.nwsAPI.hourly).then(res => {
          store.commit('setHourly', {
            'updated': res.updateTime,
            'data': res.periods
          });
        })

      }).then(() => {

        // get weather alerts data
        return GetAlerts(store.state.nwsAPI.forecastZone).then(res => {
          store.commit('setAlerts', {
            'updated': res.updated,
            'data': res.features
          });
        })

      });

    }

  }
})
