import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema(
    {
        placa: {
            type: String,
            ref: "Car",
            required: true,
        },
        cpf: {
            type: String,
            ref: "Cliente",
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
        dataInicio: {
            type: Date,
            required: true,
        },
        dataFim: {
            type: Date,
            required: true,
        },
    },
    { versionKey: false }
);

export default mongoose.model("Reserva", reservaSchema);