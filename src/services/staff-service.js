const CrudService = require("./index");
const StaffRepository = require("../respository/index");

class StaffService extends CrudService {
    constructor() {
        const staffRepository = new StaffRepository();
        super(staffRepository);
    }
    
}

module.exports = StaffService;