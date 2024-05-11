import mongoose from 'mongoose' 

let isConnected = false; // variable to check if mongoose is connected

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('mongoDB url not found.')
    if(isConnected) return console.log('Already connected to mongoDB')

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log("Connected to mongoDB")
    } catch(error) {
        console.log(error)
    }
}