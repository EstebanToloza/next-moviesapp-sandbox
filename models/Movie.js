import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Por favor, ingrese un título"]
    },
    plot: {
        type: String,
        require: [true, "Por favor, ingrese un plot"]
    }
})

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);