<<<<<<< HEAD
const mongoose = require('mongoose');

const exsubcategorySchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subcategory'
    },
    exsubcategory: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    }
})
const exsubcategory = mongoose.model('exsubcategory', exsubcategorySchema);
module.exports = exsubcategory;
=======
const mongoose = require("mongoose");

const exsubcategorySchema = mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  subcategoryId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "subcategory",
  },
  exsubcategory: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});
const exsubcategory = mongoose.model("exsubcategory", exsubcategorySchema);
module.exports = exsubcategory;
>>>>>>> 1ef72f0d4ada19081cd92d67eb69fdf12e1f19dc
