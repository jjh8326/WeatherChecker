new Vue({
  el: '#mainContent',
  data: {
    apiURL: "http://api.openweathermap.org/data/2.5/weather",
    results: [],
    displayedData: '',
    zip: '',
    valid: false,
    showCelsius: false,
    showFahrenheit: false,
    temperature: ''
  },
  /* this code wont work because it happens on load
  mounted() {
    axios.get(this.getURL).then(response => {
      this.results = response.data
    })
  },
  */
  methods: {
    getApiData: function() {
      axios.get(this.getURL).then(response => {
        this.results = response.data;
        this.valid = true;
        this.parseBasicWeather();
      }).catch(function (error) {
        alert('Please enter a valid zip code');
        //console.log(error);
      });
    },
    parseBasicWeather: function() {
      //alert('parse basic called');
      if (this.results.main.temp > 0) {
        this.temperature = this.results.main.temp;
        this.displayedData = this.temperature;
      }
    },
    reset: function() {
      this.valid = false;
      this.zip = '';
      this.showFahrenheit = false;
      this.showCelsius = false;
    }
  },
  computed: {
    getURL: function() {
      return this.apiURL + '?zip=' + this.zip + '&APPID=6715cddd7921ba500b0af9cd1f5a4b27';
    },
    getTemperatureInCelsius: function() {
      return this.temperature - 273.15;
    },
    getTemperatureInFahrenheit: function() {
      return 9/5 * (this.temperature - 273 ) + 32;
    }
  }
});

//Working API Link
//http://api.openweathermap.org/data/2.5/weather?zip=20815&APPID=6715cddd7921ba500b0af9cd1f5a4b27