import axios from "axios";
import {config} from '../../core/config/config.development';
import {showNotification} from '../../core/components/notification';

export default {
    getDoctor,
    getHospitalDoctor,
    deleteDoctor,
    addDoctor,
    updateDoctor
}

function getDoctor(doctorId) {
    return axios.get(`${config.api.endpoint}/api/Luna/Doctor/${doctorId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}


function getHospitalDoctor(HospitalId) {
    return axios.get(`${config.api.endpoint}/api/Luna/Doctor/GetHospitalDoctor/${HospitalId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

function deleteDoctor(doctorId) {
    return axios.delete(`${config.api.endpoint}/api/Luna/Doctor/${doctorId}`).then(
        (data) => showNotification(data.status, data.config.method) && data.data,
        (err) =>  err.response.status);
}

function addDoctor(doctorModel) {
    return axios.post(`${config.api.endpoint}/api/Luna/Doctor`, doctorModel)
        .then(
            (data) => showNotification(data.status, data.config.method) && data.data,
            (err) => err.response.status);
}

function updateDoctor(doctorModel) {
    return axios.put(`${config.api.endpoint}/api/Luna/Doctor`, doctorModel)
        .then(
            (data) => showNotification(data.status, data.config.method) && data.data,
            (err) => err.response.status);
}
