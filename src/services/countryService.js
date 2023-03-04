
import axios from 'axios'

const url = 'https://restcountries.com/v3.1/name'

const getCountries =  (name) => {

    return axios.get(`${url}/${name}`)
}

export default {
    getCountries
}