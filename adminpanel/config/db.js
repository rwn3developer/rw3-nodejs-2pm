const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      `mongodb+srv://khuntkhushi506:khuntkhushi506@cluster0.sizjj.mongodb.net/crud-mongodb`
    );
    console.log(`mongodb connect ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    return false;
  }
};
module.exports = db;
