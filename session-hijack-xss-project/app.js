const express = require('express');
const app = express();
const port = 3000;

// A vulnerable route that reflects the user-supplied "content" parameter without sanitization.
app.get('/', (req, res) => {
  const userContent = req.query.content || "";
  
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Session Hijacking via XSS Demo</title>
    </head>
    <body>
      <h1>Session Hijacking via XSS Demo</h1>
      <p>This demo page reflects the "content" query parameter directly into the HTML without sanitization.</p>
      <div id="injectedContent">
        ${userContent}
      </div>
      <hr>
      <!-- For demonstration purposes, we simulate a session cookie -->
      <p>Simulated session cookie: <strong>SESSIONID=123456789</strong></p>
      <p>Open your browser's developer console to observe the network requests triggered by the injected script.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Demo app is running at http://localhost:${port}`);
});
