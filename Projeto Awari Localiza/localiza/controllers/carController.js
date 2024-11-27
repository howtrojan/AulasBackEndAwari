import car from "../models/car.js";

export default class carController {
    static async inserir(req, res) {
        try {
            const { placa, ano, modelo, tipo, quilometragem, diaria, observacao } = req.body;
            const newCar = await car.create({ placa, ano, modelo, tipo, quilometragem, diaria, observacao });
            newCar.save(newCar).then((data) => {
                res.send(`Carro inserido com sucesso! ${data.modelo}`);
            });            
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao inserir o carro." });
        }
    }

    static async listar(req, res) {
        try {
            const carros = await car.find();
            res.send(carros);            
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao listar os carros." });
        }
    }

    static async buscar(req, res) {        
        try {
            const carro = await car.findById(req.params.id);
            res.send(carro);
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao buscar o carro." });
        }
    }

    static async atualizar(req, res) {
        try {
            const { placa, ano, modelo, tipo, quilometragem, diaria, observacao } = req.body;
            const carro = await car.findById(req.params.id);
            carro.placa = placa;
            carro.ano = ano;
            carro.modelo = modelo;
            carro.tipo = tipo;
            carro.quilometragem = quilometragem;
            carro.diaria = diaria;
            carro.observacao = observacao;
            carro.save(carro).then((data) => {
                res.send(data);
            });
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao atualizar o carro." });
        }
    }

    static async remover(req, res) {
        try {
            const carro = await car.findByIdAndDelete(req.params.id);
            if (!carro) {
                return res.status(404).json({ error: "Carro não encontrado." });
            }
            res.send({ message: "Carro removido com sucesso!", carro });
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocorreu um erro ao remover o carro." });
        }
    }
         
}