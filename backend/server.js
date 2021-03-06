import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Book from './models/Book';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

router.route('/books/add').post((req, res) => {
  let book = new Book(req.body);
  book
    .save()
    .then(book => {
      res.status(200).json({ book: 'Added successfully' });
    })
    .catch(err => {
      res.status(400).send('Failed to create new record');
    });
});

router.route('/books').get((req, res) => {
  Book.find((err, books) => {
    if (err) console.log(err);
    else res.json(books);
  });
});

router.route('/books/:id').get((req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) console.log(err);
    else res.json(book);
  });
});

router.route('/books/update/:id').post((req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (!book) return next(new Error('Could not load Document'));
    else {
      book.title = req.body.title;
      book.description = req.body.description;
      book.review = req.body.review;
      book.haveRead = req.body.haveRead;

      book
        .save()
        .then(book => {
          res.json('Update done');
        })
        .catch(err => {
          res.status(400).send('Update failed');
        });
    }
  });
});

router.route('/books/delete/:id').get((req, res) => {
  Book.findByIdAndRemove({ _id: req.params.id }, (err, book) => {
    if (err) res.json(err);
    else res.json('Removed successfully');
  });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
