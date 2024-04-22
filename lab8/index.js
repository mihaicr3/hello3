const mongoose = require('mongoose');
const mongoURI = "mongodb://student:h3T-bYhx-uW8@localhost:27017/laborator";

mongoose.connect(mongoURI);
const activitySchema = new mongoose.Schema({
 user: Number,
 week: Number,
 activities: [String]
});

const Activitati = mongoose.model('activities', activitySchema);

Activitati.find()
 .then((activitate) => {
 console.log(activitate);
 mongoose.connection.close(); // se inchide conexiunea cu baza de date
 })
 .catch((error) => {
 console.error('Eroare de la baza de date: ', error);
 mongoose.connection.close();
 });
