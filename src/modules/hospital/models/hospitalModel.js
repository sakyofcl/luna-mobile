export class HospitalModel {
    constructor() {
        this.hospitalId = 0;
        this.hospitalName = "";
        this.registrationNo = "";
        this.description = "";
        this.phoneNumber = "";
        this.officeEmail = "";
        this.hospitalAddress = "";
        this.isActive = true;
        this.profileImage = "";
    }

    static toHospitalModel(source) {
        return Object.assign(new HospitalModel, {
            hospitalId : source.hospitalId,
            hospitalName : source.hospitalName,
            registrationNo :source.registrationNo,
            description :source.description,
            phoneNumber :source.phoneNumber,
            officeEmail :source.officeEmail,
            hospitalAddress :source.hospitalAddress,
            isActive :source.isActive,
            profileImage:source.profileImage,
        });
    }
}
