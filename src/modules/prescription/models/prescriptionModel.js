import moment from "moment";

export class PrescriptionModel {
    constructor() {
        this.prescriptionId = 0;
        this.patientId = 0;
        this.patientName = "";
        this.doctorId = 0;
        this.doctorName = "";
        this.prescriptionDate = moment();
        this.referenceNumber = 0;
        this.isCollected = false
    }

    static toPrescriptionModel(source) {
        return Object.assign(new PrescriptionModel, {
            prescriptionId : source.prescriptionId,
            patientId : source.patientId,
            patientName : source.patientName,
            doctorId : source.doctorId,
            doctorName : source.doctorName,
            prescriptionDate : source.prescriptionDate,
            referenceNumber : source.referenceNumber,
            isCollected : source.isCollected
        });
    }
}

