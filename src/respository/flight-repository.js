const { Flights } = require("../models/index");
const {Op} = require("sequelize");

class FlightRepository 
{

    #createFilter(data){
        let filter = {}
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter = [];
        if(data.minPrice) {
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
           
        }
        if(data.maxPrice) {
            priceFilter.push({price : {[Op.lte] : data.maxPrice}});
        }
        Object.assign(filter, {[Op.and] : priceFilter});
        return filter;

    }


    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;  

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPK(flightId);
            return flight;
        } catch(error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getAllFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter)
            console.log("filterObject", filterObject);
            const flight = await Flights.findAll({
                where: filterObject
        });
            return flight;
        } catch(error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    

}

module.exports =  FlightRepository;
