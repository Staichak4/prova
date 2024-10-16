import mongoose from "mongoose";
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('MongoDB conectado com sucesso.')
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB: ', error);
    }
};

connectDB();

export default mongoose;