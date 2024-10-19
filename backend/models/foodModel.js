import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

console.log("FIND ALREADY PRESENT", mongoose.models.food);

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

console.log("FOODMODEL", foodModel);


export default foodModel;