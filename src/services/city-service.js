const { CityRepository } = require("../respository/index");

class CityService {

    constructor() {
        this.cityRepository = new CityRepository();
    }
    
    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error); 
        }

    }

    async deleteCity(cityId) {
        try {
            const result = await this.cityRepository.deleteCity({ cityId });
            return result;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);  
        }
        
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity({ cityId, data });
            return city;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);   
        }
        
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity({ cityId });
            return city;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error); 
        }
        
    }

    async getAllCities() {
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error); 
        }
        
    }
}

module.exports = CityService;