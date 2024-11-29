import reserva from "../models/reserva.js";
import carro from "../models/car.js";
import cliente from "../models/cliente.js";

export default class reservaController {
  static async inserir(req, res) {
    try {
      const carroData = await carro.findOne({ placa: req.body.placa });
      const clienteData = await cliente.findOne({ cpf: req.body.cpf });
      const { status, dataInicio, dataFim } = req.body;
      const newReserva = await reserva.create({
        placa: carroData.placa,
        cpf: clienteData.cpf,        
        status,
        dataInicio,
        dataFim,
      });
      newReserva.save(newReserva).then((data) => {
        res.send(`Reserva inserida com sucesso! ${data.toJSON()}`);
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Ocorreu um erro ao inserir a Reserva.",
      });
    }
  }

  static async listar(req, res) {
    try {
      const reservas = await reserva.find();
      res.send(reservas);
    } catch (error) {
      res.status(500).json({
        error: error.message || "Ocorreu um erro ao listar as Reservas.",
      });
    }
  }
}
