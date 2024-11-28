const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');
const URou=require('./routes/CollegeRoute')
const app=express();

const PORT=3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'client')));
app.use('/college',URou);

mongoose.connect('mongodb://localhost:27017/MongTest').then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
  
  app.listen(PORT ,() => {
    console.log('Server running on port 3000');
  });
