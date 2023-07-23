import axios from "axios";
import {config} from '../../core/config/config.development';

export default {
    getHospitalPharmacy
}

function getHospitalPharmacy(HospitalId) {
    return axios.get(`${config.api.endpoint}/api/Luna/Pharmacy/GetHospitalPharmacy/${HospitalId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

