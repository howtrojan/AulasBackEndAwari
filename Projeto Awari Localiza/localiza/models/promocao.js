import mongoose from "mongoose";

const promocaoSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,    
            required: true,
        },
        descricao: {
            type: String,            
            required: true,
        },
        dtValidade: {
            type: Date,
            required: true,
        },
    },
    { versionKey: false }
);

export default mongoose.model("Promocao", promocaoSchema);