import mongoose from "mongoose";

const FuncionarioSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
    dtNascimento: {
      type: Date,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    endereco: {
      type: String,
      required: true,
    },
    salario: {    
      type: Number,
      required: true,
    },
    qtdAlugueis: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Funcionario", FuncionarioSchema);
