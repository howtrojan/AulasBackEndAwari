import cliente from "../models/cliente.js";

export default class clienteController {
  static async inserir(req, res) {
    try {
      const {
        nome,
        cpf,
        idade,
        dtNascimento,
        telefone,
        email,
        endereco,
        numeroCarteiraMotorista,
        anoVencimentoCarteiraMotorista,
        fotoCarteira,
      } = req.body;
      const newCliente = await cliente.create({
        nome,
        cpf,
        idade,
        dtNascimento,
        telefone,
        email,
        endereco,
        numeroCarteiraMotorista,
        anoVencimentoCarteiraMotorista,
        fotoCarteira,        
      });
      newCliente.save(newCliente).then((data) => {
        res.send(`Cliente inserido com sucesso! ${data.toJSON()}`);
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Ocorreu um erro ao inserir o Cliente.",
      });
    }
  }

  static async listar(req, res) {
    try {
      const clientes = await cliente.find();
      res.send(clientes);
    } catch (error) {
      res.status(500).json({
        error: error.message || "Ocorreu um erro ao listar os Clientes.",
      });
    }
  } 
}
