const express = require('express');
const app = express();
const port = 3000;

// A vulnerable route that reflects user input without sanitization.
// The "content" query parameter is directly inserted into the HTML.
app.get('/', (req, res) => {
  const userContent = req.query.content || "";
  
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Keylogging via XSS Demo</title>
    </head>
    <body>
      <h1>Keylogging via XSS Demo</h1>
      <p>This demo page reflects the "content" query parameter directly without sanitization.</p>
      <div id="injectedContent">
        ${userContent}
      </div>
      <hr>
      <p>Below is a simple input field. If a keylogger is injected, every keystroke will be logged.</p>
      <input type="text" id="demoInput" placeholder="Type something here...">
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Demo app is running at http://localhost:${port}`);
});
