const { AirportService } = require("../services/index");

const airportService = new AirportService();

// POST 
const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully Created a Airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not testing able to create a Airport",
            err: error
        })
    }

}

// Delete -> /city/id
const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a Airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a Airport",
            err: error
        })
    }
    
}

//GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetch/get a Airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch/get a Airport",
            err: error
        })
    }
    
}

// PATCH -> /city/:id -> req body
const update = async (req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a Airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a Airport",
            err: error
        })
    }
    
}

//GET -> /city/
const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Successfully fetch/get a Airports",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch teh Airports",
            err: error
        })
    }
    
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}

