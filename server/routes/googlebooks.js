const { Router } = require('express');
const cors = require('cors');

const apiRouter = Router();
apiRouter.use(cors());

apiRouter.get('/books', async (req, res) => {
  try {
    console.log('back end req', req.body);
    const key = process.env.GOOGLE_BOOK_KEY;
    console.log('key', key);
    res.status(200).send('hello');
    const url = `https://www.googleapis.com/books/v1/volumes/?q=${genre}&key=${key}`;
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
});
