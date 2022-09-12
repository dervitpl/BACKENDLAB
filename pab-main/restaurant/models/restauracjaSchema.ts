const mongooseRestauracja = require("mongoose");
const SchemaRestauracja = mongooseRestauracja.Schema;


let restauracjaSchema = new SchemaRestauracja(
  {
    nazwa: {
      type: String,
      required: true,
    },
    adres: {
      type: String,
    },
    telefon: {
      type: String,
    },
    nip: {
      type: String,

    },
    email: {
      type: String,
    },
    www: {
      type: String,
    },
  },
  { timestamps: true }
);

const Restauracja = mongooseRestauracja.model("Restauracja", restauracjaSchema);
module.exports = Restauracja;