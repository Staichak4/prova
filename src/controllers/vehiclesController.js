import Vehicles from "../models/Vehicles.js";

export const create = async (req,res) => {
    try {
        const content = await Vehicles.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Vehicles.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const content = await Vehicles.findByIdAndUpdate(
            req.params.id,
            req.body
        ).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await Vehicles.findByIdAndDelete(req,params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

