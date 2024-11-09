const { FlightService } = require("../services/index");
const { getAll } = require("./airport-controller");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: false,
            message: "Successfuly able to create a Flight",
            err: {}
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a Flight",
            err: error
        })
    }
}



module.exports = {
    create,
}