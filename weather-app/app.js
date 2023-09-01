const request = require('request')
const geocode = require('./utils/geocode')

log = console.log

// const url = 'http://api.weatherstack.com/current?access_key=9ebf8eedf3c9194464a0ea4664e5649d&query=&units=f'


// const location = 'Los Angeles, CA';
// const location = '3740 idlebrook cir apt 206, 32707, casselberry, fl';
// const location = '';
// const addressUrl = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(location)}.json?key=${apiKey}`;

// Get weather data with lat lon
// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         'Unable to connect to weather data'
//     } else if (response.body.error){
//         log('Unable to find location')
//     } else{
//         log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`)    
//     }
// })

// //Get lat and lon from an address
// request({ url: addressUrl, json: true }, (error, response) => {
//     log(response.body.result)
//     if (error){
//         log('Unable to connect to geolocation data')
//     }else if(!response.body.results){
//         log(`Unable to find location`)
//     }else{
//         const lat = response.body.results[0].position.lat
//         const lon =  response.body.results[0].position.lon
//         log(`lat: ${lat} lon: ${lon}`)
//     }
// })



geocode ('Orlando, fl', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})





