import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
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
    numeroCarteiraMotorista: {
      type: Number,
      required: true,
    },
    anoVencimentoCarteiraMotorista: {
      type: Number,
      required: true,
    },
    fotoCarteira: {
      data: Buffer,
      contentType: String,      
    },
  },
  { versionKey: false }
);

export default mongoose.model("Cliente", clienteSchema);
