const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://suraj121704c:singh123@cluster0.ndbapyz.mongodb.net/microsoft?retryWrites=true&w=majority")

module.exports = {
    connection
}