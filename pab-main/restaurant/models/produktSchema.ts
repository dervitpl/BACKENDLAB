const mongooseProdukt = require("mongoose");
const SchemaProdukt = mongooseProdukt.Schema;

let produktSchema = new SchemaProdukt(
  {
    nazwa: {
      type: String,
      required: true,
    },
    cena: {
      type: Number,
    },
    ilosc: {
      type: Number,
    },
    jednostkaMiary: {
      type: String,
    },
  },
  { timestamps: true }
);

const Produkt = mongooseProdukt.model("Produkt", produktSchema);
module.exports = Produkt;