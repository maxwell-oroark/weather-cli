const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l
    const weather = await getWeather(location)

    spinner.stop()

    console.log(`Forecast for ${location}:`)
    weather.forecast.forEach(item =>
      console.log(`\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${item.text}`))
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}
