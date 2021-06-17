// Init storage
const storage = new Storage()

// Get stored location data
const weatherLocation = storage.getLocationData()

// Init weather object
const weather = new Weather(weatherLocation.city)

// Init Ui
const ui = new Ui()

// Bootstrap Modal
modal = new bootstrap.Modal(document.getElementById('locModal'))

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value

  // change location
  weather.changeLocation(city)
  modal.hide()

  // Set location in LocalStorage
  storage.setLocationData(city)

  // Get and display weather
  getWeather()
})

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results)
    })
    .catch((err) => {
      console.log(err)
    })
}
