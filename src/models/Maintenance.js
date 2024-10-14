import db from "../config/db.js";

const maintenanceSchema = new db.Schema({
    workshop: {
        type: String,
        ref: "Workshop",
        required: true,
    },
    vehicle: {
        type: String,
        ref: "Vehicles",
        required: true
    },
    services: [{
        serviceName: {
            type: String,
            required: true
        }, 
        price: {
            type: Number,
            required: true
        },
    }],
    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    }
});

const Maintenance = db.model("Maintenance", maintenanceSchema);

export default Maintenance;
