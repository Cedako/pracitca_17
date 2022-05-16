const { Schema, model } = require("mongoose");

const peopleSchema = new Schema(
    {firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }}
);

module.exports = model("people", peopleSchema);