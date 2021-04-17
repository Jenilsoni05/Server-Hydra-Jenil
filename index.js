const express = require('express');
const restRoutes = require('./routes/api/restRoutes');
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/api/userRoutes');
const authRoutes = require('./routes/api/authRoute');
const reviewRoutes = require('./routes/api/reviewRoutes');
const blogRoutes = require('./routes/api/blogRoutes');
const cors = require('cors');

const app = express();

//set a middleware to parse dat
app.use(express.json());
connectDB();
app.use('/api/rest', restRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/blog', blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started');
});

