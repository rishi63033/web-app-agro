require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT ;
const requestRoutes = require('./routes/requestRoutes');

//middleware
app.use(cors());
app.use(express.json());

//MongoDB connection

connectDB();
//test
app.get('/', (req , res) => {
    res.send('Agroconnect backend is running');
});

//server start
app.listen(PORT, '0.0.0.0', () => {
   console.log(`Server running at http://0.0.0.0:${PORT}`);
})
const userRoutes = require('./routes/userRoutes');
app.use('/api/users',userRoutes);
app.use('/api/requests', requestRoutes);