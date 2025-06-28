const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db'); // gunakan koneksi dari db.js

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Uji koneksi MySQL
db.getConnection((err, connection) => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('MySQL connected');
        connection.release();
    }
});

// Routes
app.get('/', (req, res) => res.send('Backend is running'));
app.get('/status', (req, res) => res.json({ status: 'Server is running' }));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
