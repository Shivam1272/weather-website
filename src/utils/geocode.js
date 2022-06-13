const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=cP84YiW6c4Q9q1LLRibiB9fBxdJGmlLT&location=' + address

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('NO CONNECTION!!')
        } else {
            callback(undefined, {
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng,
                location: {
                    city: body.results[0].locations[0].adminArea5,
                    state: body.results[0].locations[0].adminArea3,
                    country: body.results[0].locations[0].adminArea1
                }
            })
        }
    })
}

module.exports = geocode
