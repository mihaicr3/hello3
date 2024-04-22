/*
Daca datele de conectare sunt inregistrate in fisierul .env
mongoUSER = student
mongoPASS = h3T-bYhx-uW8
*/
var dotenv = require('dotenv');
require('dotenv').config();
const mongoose = require('mongoose');
//const mongoURI = "mongodb://student:h3T-bYhx-uW8@localhost:27017/laborator";
const mongoURI =
`mongodb://${process.env.mongoUSER}:${process.env.mongoPASS}@localhost:27017/laborator`;
mongoose.connect(mongoURI);
var schemaBook = mongoose.Schema({
 title: String,
 isbn: String
 });
// Compile model from schema
var bookObject = mongoose.model('BookModel', schemaBook, "Books");
async function createBook() {
 var bookObject = mongoose.model('BookModel', schemaBook, "Books");
 try {
 let result = await bookObject.create({
 title: 'Un Titlu de carte',
 isbn: '123-456789012'
 });
 console.log("insert success");
 console.log(result);
 }
 catch(err) {
 console.log("error insert data");
 }
 finally{
 mongoose.connection.close();
 }
}
async function findBooks(){
var Books = mongoose.model('BookModel',schemaBook,"Books");
Books.find({})
.then(books=>{
console.log(books);
})
}

//createBook();
findBooks();
