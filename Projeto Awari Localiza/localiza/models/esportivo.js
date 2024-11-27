import mongoose from "mongoose";

const esportivoSchema = new mongoose.Schema(
  {
    idCarro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    to100km: {
      type: Number,
      required: true,
    },
    melhorias: {
      type: String,
      required: false,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Esportivo", esportivoSchema);
