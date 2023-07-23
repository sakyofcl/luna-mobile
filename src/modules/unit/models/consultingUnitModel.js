export class ConsultingUnitModel {
    constructor() {
        this.consultingUnitId = 0;
        this.unitName = "";
        this.openTime = new Date();
        this.closeTime = new Date();
        this.status = 1;
        this.currentAppoinmentCount = 0;
        this.hospitalId = 0;
    }
}
