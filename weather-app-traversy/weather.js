console.log('--- weather.js ---')

class Weather {
  constructor(city) {
    this.apikey = '489e5e04d3beef0928df975761b55048'
    this.city = city
  }

  // Fetch weather from Api
  async getWeather() {
    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`)

    const responceData = await responce.json()

    return responceData
  }

  // Change Weather Location
  changeLocation(city) {
    this.city = city
  }
}
