const express = require('express');
 const app = express();
 const authRoutes = require('./routes/auth');
 const protectedRoute = require('./routes/protectedRoute');
const connectDb = require('./config/db');
 app.use(express.json());
 connectDb()
 app.use('/auth', authRoutes);
 app.use('/profile', protectedRoute);
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 });