// module.exports = {
//     CityService: require("./city-service"),
// }

const CityService = require('./city-service'); 
const AirportService = require('./airport-service'); 
const FlightService = require('./flight-service'); 
const CrudService = require('./crud-service'); 
const StaffService = require('./staff-service'); 



module.exports = { CityService, AirportService, FlightService, CrudService, StaffService};
