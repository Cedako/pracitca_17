const mongoose = require ("mongoose");
require("dotenv").config();
(async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://Daecko:Joshua2430@cluster0.ifuv3.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();