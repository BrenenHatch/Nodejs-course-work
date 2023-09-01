const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

log = console.log

const location = process.argv[2]

if (location){
    geocode(location, (geocodeError, { latitude, longitude, location } = {}) => {
        if (geocodeError) {
            return console.error('Geocode Error', geocodeError);
        } else {
            forecast(latitude, longitude, (forecastError, forecastData) => {
                if (forecastError) {
                    return console.error('Forecast Error', forecastError);
                } else {
                    log(location)
                    log(forecastData);
                }
            });
        }
    });
} else{
    log('Please provide location')
}









