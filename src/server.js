const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// In-memory store for form submissions (use a database in a real app)
let formSubmissions = [];

// Endpoint to receive form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate form data
  if (!name || !email || !subject) {
    return res.status(400).json({ message: 'Name, email, and subject are required.' });
  }

  // Store the data
  const submission = { name, email, subject, message, submittedAt: new Date() };
  formSubmissions.push(submission);

  res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
