import mongoose from 'mongoose';

// Connecting to MongoDB
const connect_mongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected.");
    }
    catch(err){
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};



export default connect_mongoDB;