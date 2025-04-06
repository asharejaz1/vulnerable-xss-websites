const express = require('express');
const app = express();
const port = 3000;

// GET route vulnerable to Reflected XSS.
// It takes a "search" query parameter and reflects it directly into the HTML without sanitization.
app.get('/', (req, res) => {
  const searchQuery = req.query.search || "";
  
  // The search query is inserted directly into the page output.
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Reflected XSS Demo</title>
    </head>
    <body>
      <h1>Reflected XSS Demo</h1>
      <form method="GET" action="/">
        <input type="text" name="search" placeholder="Search..." />
        <input type="submit" value="Search" />
      </form>
      <p>You searched for: ${searchQuery}</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Reflected XSS demo app listening at http://localhost:${port}`);
});
