import promocao from "../models/promocao.js";

export default class utilitarioController {

   static async inserir(req, res) {
        try {            
            const { titulo , descricao, dtValidade } = req.body;
            const newPromocao = await promocao.create({ titulo, descricao, dtValidade });
            newPromocao.save(newPromocao).then((data) => {
                res.send(`Promoção inserida com sucesso! ${data.toJSON()}`);
            });
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao inserir a Promoção." });
        }
    }

    static async listar(req, res) {
        try {
            const promocaos = await promocao.find();
            res.send(promocaos);
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao listar as Promoções." });
        }
    }

}