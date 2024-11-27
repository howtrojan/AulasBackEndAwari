import mongoose from "mongoose";

const utilitarioSchema = new mongoose.Schema(
  {
    idCarro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    qtPassageiros: {
      type: Number,
      required: true,
    },
    tmBagageiro: {
      type: Number,
      required: true,
    },
    kmLitro: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Utilitario", utilitarioSchema);
