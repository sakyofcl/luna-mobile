import axios from "axios";
import {config} from '../../core/config/config.development';

export default {
    getPharmacyPrescription,
    getPrescription
}

function getPharmacyPrescription(PharmacyId) {
    return axios.get(`${config.api.endpoint}/api/Luna/Prescription/GetPharmacyPrescription/${PharmacyId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

function getPrescription(PrescriptionId) {
    return axios.get(`${config.api.endpoint}/api/Luna/Prescription/${PrescriptionId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

