import Utilitario from "../models/utilitario.js";
import carro from "../models/car.js";

export default class utilitarioController {

   static async inserir(req, res) {
        try {
            const c = await carro.findOne({ placa: req.body.placa})
            const { qtPassageiros, tmBagageiro, kmLitro } = req.body;
            const newUtilitario = await Utilitario.create({ idCarro: c.id, qtPassageiros, tmBagageiro, kmLitro });
            newUtilitario.save(newUtilitario).then((data) => {
                res.send(`Utilitario inserido com sucesso! ${data.idCarro}`);
            });
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao inserir o Utilitario." });
        }
    }

}