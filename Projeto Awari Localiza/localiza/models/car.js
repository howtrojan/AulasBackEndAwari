import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  quilometragem: {
    type: Number,
    required: true,
  },
  diaria: {
    type: Number,
    required: true,
  },
  observacao: {
    type: String,
    required: true,
  },
}, { versionKey: false });

export default mongoose.model("Car", carSchema);
