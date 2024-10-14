import db from "../config/db.js";
import { Schema, model} from "mongoose";

const vehiclesSchema = new db.Schema({
    plate: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    maintenances: {
        type: [Schema.Types.ObjectId],
        ref: "Maintenance",
        require: true
    }
});

const Vehicles = db.model("Vehicles", vehiclesSchema);

export default Vehicles;