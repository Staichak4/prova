import Workshop from "../models/Workshop.js";

export const create = async (req,res) => {
    try {
        const content = await Workshop.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Workshop.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const content = await Workshop.findByIdAndUpdate(
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
        const content = await Workshop.findByIdAndDelete(req,params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};


// const Workshop = require("../models/Workshop");

// async function createWorkshop(req, res) {
//     const { name, adress, specialities } = req.body;
//     try {
//         const newWorkshop = new Workshop({name, adress, specialities});
//         const savedWorkshop = await newWorkshop.save();
//         res.status(201).json({
//             mensagem: "Workshop cadastrado com sucesso.",
//             Workshop: savedWorkshop,
//         });
//     } catch (erro) {
//         res.status(500).json({
//             mensagem: "Erro ao cadastrar Workshop",
//             erro: erro.message,
//         });
//     }
// }

// async function indexWorkshop(req, res) {
//     try {
//         const Workshop = await Workshop.find();
//         res.status(200).json(workshop);
//     } catch (erro) {
//         res.status(500).json({
//             mensagem: "Erro ao buscar",
//             erro: erro.message,
//         });
//     }
// }

// async function updateWorkshop(req, res) {
//     const { id } = req.params;
//     const { name, adress, specialities} = req.body;
//     try {
//         const updatedWorkshop = await Workshop.findByIdAndUpdate(
//             id,
//             { name, adress, specialities},
//             { new: true, runValidators: true }
//         );
//         if (updateWorkshop) {
//             res.status(200).json({
//                 mensagem: "Workshop editado com sucesso.",
//                 workshop: updateWorkshop,
//             });
//         } else {
//             res.status(404).json({mensagem: "Workshop não encontrado"});
//         };
//     } catch (erro) {
//         res.status(500).json({
//             mensagem: "Erro ao atualizar workshop",
//             erro: erro.message
//         });
//     }
// }

// async function destroyWorkshop(req, res) {
//     const { id } = req.params;
//     try {
//         const deletedWorkshop = await Workshop.findByIdAndDelete(id);
//         if (deletedWorkshop) {
//             res.status(200).json({
//                 mensagem: "Workshop deletado com sucesso.",
//                 workshop: deletedWorkshop,
//             });
//         } else {
//             res.status(404).json({mensagem: "Workshop não encontrado."});
//         }
//     } catch (erro) {
//         res.status(500).json({
//             mensagem: "Erro ao deletar Workshop",
//             erro: erro.message,
//         });
//     }
// }

// module.exports = {
//     createWorkshop,
//     indexWorkshop,
//     updateWorkshop,
//     destroyWorkshop
// };