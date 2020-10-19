const mongoose = require('mongoose');
// in real world connection string should come from  connection file
mongoose.connect('mongodb://localhost/playground')
 .then(()=> console.log('Connected to MongoDB...'))
 .catch(err=>console.error('Could not connect to MongoDB...'));