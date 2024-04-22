const mongoose = require('mongoose');
const mongoURI = "mongodb://student:h3T-bYhx-uW8@localhost:27017/laborator";
mongoose.connect(mongoURI);
const userSchema = new mongoose.Schema({
 name: String,
 age: Number,
 email: String
});
const User = mongoose.model('User', userSchema);
User.find()
 .then((users) => {
 console.log(users);
 mongoose.connection.close(); // se inchide conexiunea cu baza de date
 })
 .catch((error) => {
 console.error('Eroare de la baza de date: ', error);
 mongoose.connection.close();
 });
