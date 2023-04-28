const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please add the name."],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Task", taskSchema);