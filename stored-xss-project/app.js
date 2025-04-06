const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory store for demonstration purposes.
let messages = [];

// Middleware to parse URL-encoded bodies.
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the form and stored messages.
app.get('/', (req, res) => {
  // Join messages without any sanitization.
  const messagesHTML = messages.join('<br>');

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Stored XSS Demo - Node.js</title>
    </head>
    <body>
        <h1>Stored XSS Demo (Node.js Version)</h1>
        <form method="POST" action="/submit">
            <textarea name="message" placeholder="Enter your message here" rows="4" cols="50"></textarea><br>
            <input type="submit" value="Submit">
        </form>
        <h2>Messages</h2>
        <div>
            ${messagesHTML}
        </div>
    </body>
    </html>
  `);
});

// Route to handle form submissions.
app.post('/submit', (req, res) => {
  const message = req.body.message;
  // WARNING: No sanitization is performed here, making this code vulnerable.
  messages.push(message);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Vulnerable XSS demo app listening at http://localhost:${port}`);
});
