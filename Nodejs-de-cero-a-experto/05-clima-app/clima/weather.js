const axios = require('axios');


const getClima = async(coord) => {

    result = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lng}`);



}