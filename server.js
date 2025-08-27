const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  // Basic validation
  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Required fields missing' });
  }
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, phone, service, message });
  
  res.json({ success: true, message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.' });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});