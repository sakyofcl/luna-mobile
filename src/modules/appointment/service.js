import axios from "axios";
import {config} from '../../core/config/config.development';

export default {
    AddQueue,
    GetSpecificAppointment,
    GetAppointments
}


function AddQueue(data) {
    return axios.post(`${config.api.endpoint}/api/Luna/Queue/AddQueue`,data).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

function GetSpecificAppointment(appointmentNumber){
    return axios.get(`${config.api.endpoint}/api/Luna/Queue/GetAppointment/${appointmentNumber}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}

function GetAppointments(consultingUnitId){
    return axios.get(`${config.api.endpoint}/api/Luna/Queue/GetAppointments/${consultingUnitId}`).then(
        (response) => response.data,
        (error) => { console.log(error) });
}


