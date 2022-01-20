import mongoose from 'mongoose'

const URI_MONGO = process.env.URI_MONGO

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.URI_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        })
        console.log('conectado a la db')
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

export default dbConnect;