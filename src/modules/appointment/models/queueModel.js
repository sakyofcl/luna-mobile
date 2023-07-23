import moment from "moment";

export class QueueModel {
    constructor() {
        this.queueId = 0;
        this.consultingUnitId = 0;
        this.patientId = 0;
        this.priority = 1;
        this.requestTime = moment();
        this.estimatedWaitTime = null;
        this.completionTime = null;
        this.pickBy = null;
        this.completeBy = null;
        this.notes = null;
        this.status = null;
    }
}
