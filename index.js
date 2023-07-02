const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require("./routers/api")
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName ='myDB';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Perform database operations

  // Close the MongoDB connection
  client.close();
});


// Create a new Express app
const app = express();


// mongoose.connect('mongodb://localhost:27017/ninja', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB', error);
//   });
// mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(routes);
// app.get('/api', function(req, res){
//   console.log("GET request")
//   res.send({name:"dina"})
// })
app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests')
})