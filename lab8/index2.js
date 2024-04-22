const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3011; // Choose any port you prefer

// MongoDB connection
const mongoURI = "mongodb://student:h3T-bYhx-uW8@localhost:27017/laborator";
mongoose.connect(mongoURI, { useNewUrlParser: true });

// Define the schema
const activitySchema = new mongoose.Schema({
 user: Number,
 week: Number,
 activities: [String]
});

// Define the model
const Activitati = mongoose.model('activities', activitySchema);

// Define the route handler
app.get('/api/items/:week', async (req, res) => {
  const week = parseInt(req.params.week);
  
  try {
    // Find items with the specified week
    const items = await Activitati.find({"user":11, week });
    res.json(items);
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.json());


app.post('/api/items/add', async (req, res) => {
  const { user, week, activities } = req.body;

  try {
    // Create a new document with the provided data
    const newItem = new Activitati({ user, week, activities });
    // Save the document to the database
    await newItem.save();
    res.status(201).json(newItem); // Return the newly created item
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
