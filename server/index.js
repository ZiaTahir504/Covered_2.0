const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

// CONNECT TO DB //
async function connect() {
  try {
    await db.connect();
    console.warn('connected');
    const { rows } = await db.query('SELECT * FROM Users');
    console.table(rows);
    await db.end();
  } catch (error) {
    console.warn('Unable to connect to the database:');
    console.warn(error.message);
    process.exit(1);
  }
}

// INITIALIZE DB AND SERVER CONNECTION //
async function init() {
  // await connect();
  // console.warn(`Starting Sequelize + Express on port ${PORT}...`);
  app.listen(PORT, () => {
    console.warn(`Express server started on port ${PORT}.`);
  });
}
init();
