const { FlightRepository, AirplaneRepository } = require("../respository/index");

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);
        }
    }

    async getFlight(data) {
        try {
            const flight = await this.flightRepository.getFlight({
                data
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);
        }
    }

    async getAllFlight(data) {
        try {
            const flight = await this.flightRepository.getAllFlight({
                data
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);
        }
    }
    
}

module.exports = FlightService;