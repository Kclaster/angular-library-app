import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Book = new Schema({
  title: String,
  description: String,
  review: Number,
  haveRead: Boolean
});

export default mongoose.model('Book', Book);
