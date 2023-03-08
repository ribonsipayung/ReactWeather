var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?id=524901&lang=id&appid=8e4207c78deee2801e73fc52d654a82b&units=imperial';

module.exports={
    getTemp: function(location){
        var encodedLocation=encodeURIComponent(location);
        var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
        
    }
}
