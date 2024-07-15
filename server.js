import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist/assets'));
app.set('view engine', 'ejs');

// Routes
app.get("/", async (req, res) => {
  try {
    res.render('pages/index', {});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});