import esportivo from "../models/esportivo.js";
import carro from "../models/car.js";

export default class esportivoController {

    static async inserir(req, res) {
        try {
            const c = await carro.findOne({ placa: req.body.placa})            
            const { to100km, melhorias } = req.body;
            const newEsportivo = await esportivo.create({ idCarro: c.id, to100km, melhorias });
            newEsportivo.save(newEsportivo).then((data) => {
                res.send(`Esportivo inserido com sucesso! ${data.idCarro}`);
            });
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao inserir o esportivo." });
        }
    }

}