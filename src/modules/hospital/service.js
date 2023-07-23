import axios from "axios";
import {config} from '../../core/config/config.development';

export default {
    getFilteredHospital,
    getHospital
}

function getFilteredHospital() {
    return axios.get(`${config.api.endpoint}/api/Luna/Hospital/GetAll`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

function getHospital(id) {
    return axios.get(`${config.api.endpoint}/api/Luna/Hospital/${id}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

