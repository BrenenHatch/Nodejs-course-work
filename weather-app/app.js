const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

log = console.log


geocode('Orlando, fl', (geocodeError, geocodeData) => {
    if (geocodeError) {
        console.error('Geocode Error', geocodeError);
    } else {
        console.log('Geocode Data', geocodeData);
        forecast(geocodeData.latitude, geocodeData.longitude, (forecastError, forecastData) => {
            if (forecastError) {
                console.error('Forecast Error', forecastError);
            } else {
                console.log('Forecast Data', forecastData);
            }
        });
    }
});








