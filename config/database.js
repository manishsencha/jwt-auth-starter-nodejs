const mongoose = require('mongoose')


exports.connect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("CONNECTED TO DATABASE..."))
        .catch((error) => {
            console.log("FAILED TO CONNECT TO DATABASE")
            console.error(error)
        })
}