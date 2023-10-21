const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://parin:workshop-app@cluster0.q7tni12.mongodb.net/?retryWrites=true&w=majority');
        console.log('Database Connected');
    } catch (err) {  
        console.log(err);
    }
};

module.exports = connectDB;
