const mongoose = require("mongoose");

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connected ...!");
});

const MoongooseConnect = async () => {
  await mongoose.connect(
    `mongodb+srv://aziz86ozbek:azizozbek86@cluster0.vtadidh.mongodb.net/deneme`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = MoongooseConnect