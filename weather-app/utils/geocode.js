const request = require('request')

const geocode = (address, callback) => {
    const apiKey = '1cnuAwbSbzd5Y4hd2GehUFOJUSDzla45'
    const addressUrl = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json?key=${apiKey}`
    request({ url: addressUrl, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to geolocation data', undefined)
        } else if (response.body.error){
            callback('Unable to find location')
        } else{
            callback(undefined, {
                latitude: response.body.results[0].position.lat,
                longtitude: response.body.results[0].position.lon,
                location: response.body.results[0].address.freeformAddress
            })  
        }
    })
}

module.exports = geocode