import axios from "axios";
import {config} from '../../core/config/config.development';
import { showNotification } from "../../core/components/notification";

export default {
    GetHospitalUnits,
    GetHospitalUnitsForPatient,
    removeConsultingUnit,
    addConsultingUnit,
    editConsultingUnit,
    getConsultingUnit
}

function GetHospitalUnits(hospitalId){
    return axios.get(`${config.api.endpoint}/api/Luna/ConsultingUnit/Hospital/${hospitalId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

function GetHospitalUnitsForPatient(PatientId){
    return axios.get(`${config.api.endpoint}/api/Luna/ConsultingUnit/Patient/${PatientId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

function removeConsultingUnit(consultingUnitId) {
    return axios.delete(`${config.api.endpoint}/api/Luna/ConsultingUnit/${consultingUnitId}`).then(
        (data) => showNotification(data.status, data.config.method) && data.data,
        (err) =>  err.response.status);
}

function addConsultingUnit(consultingUnit) {
    return axios.post(`${config.api.endpoint}/api/Luna/ConsultingUnit`, consultingUnit)
        .then(
            (data) => showNotification(data.status, data.config.method) && data.data,
            (err) => err.response.status);
}

function editConsultingUnit(consultingUnit) {
    return axios.put(`${config.api.endpoint}/api/Luna/ConsultingUnit`, consultingUnit)
        .then(
            (data) => showNotification(data.status, data.config.method) && data.data,
            (err) => err.response.status);
}

function getConsultingUnit(consultingUnitId) {
    return axios.get(`${config.api.endpoint}/api/Luna/ConsultingUnit/${consultingUnitId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}
