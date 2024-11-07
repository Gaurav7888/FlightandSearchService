const { AirportRepository } = require("../respository/index");

class AirportService {

    constructor() {
        this.airportRepository = new AirportRepository();
    }
    
    async createAirport(data) {
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error); 
        }

    }

    async deleteAirport(airportId) {
        try {
            const result = await this.airportRepository.deleteAirport({ airportId });
            return result;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);  
        }
        
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await this.airportRepository.updateAirport({ airportId, data });
            return airport;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);   
        }
        
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportRepository.getAirport({ airportId });
            return airport;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error); 
        }
        
    }

    async getAllAirports(filter) {
        try {
            const airports = await this.airportRepository.getAllAirport({name: filter.name});
            return airports;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error); 
        }
        
    }
}

module.exports = AirportService;

