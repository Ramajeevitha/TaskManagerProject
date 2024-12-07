const mongoose = require('mongoose');

const uri = "mongodb+srv://jeevi2004:jeevi2004@cluster0.bhwi6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to database:", error));
