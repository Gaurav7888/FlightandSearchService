const { CityRepository } = require("./repository/index");

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

    async deleteCity(data) {
        try {
            const city = await this.cityRepository.deleteCity(data);
            return true;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);  
        }
        
    }

    async updateCity(data) {
        try {
            const city = await this.cityRepository.updateCity(data);
            return city;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error);   
        }
        
    }

    async getCity(data) {
        try {
            const city = await this.cityRepository.getCity(data);
            return city;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw (error); 
        }
        
    }
}