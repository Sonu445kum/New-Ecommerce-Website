const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Save to database or send email (e.g., with nodemailer)
    console.log('Contact form submitted:', { name, email, message });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
