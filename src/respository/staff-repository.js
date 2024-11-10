const CrudRepository = require("./crud-repository");
const { Staff } = require("../models/index");

class StaffRepository extends CrudRepository {
    constructor() {
        super(Staff);
    }
}

module.exports = StaffRepository;