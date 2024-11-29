import funcionario from "../models/funcionario.js";

export default class funcionarioController {
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
        salario,
        qtdAlugueis,
        status,
      } = req.body;
      const newfuncionario = await funcionario.create({
        nome,
        cpf,
        idade,
        dtNascimento,
        telefone,
        email,
        endereco,
        salario,
        qtdAlugueis,
        status,
      });
      newfuncionario.save(newfuncionario).then((data) => {
        res.send(`Funcionario inserido com sucesso! ${data.toJSON()}`);
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Ocorreu um erro ao inserir o Funcionario.",
      });
    }
  }

  static async listar(req, res) {
    try {
      const funcionarios = await funcionario.find();
      res.send(funcionarios);
    } catch (error) {
      res.status(500).json({
        error: error.message || "Ocorreu um erro ao listar os Funcionarios.",
      });
    }
  }
}
