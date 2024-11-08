const http = require('http');

const hostname = '0.0.0.0'; // Listen on all network interfaces, required for Docker
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // Set content type to HTML

  // HTML structure with basic CSS for a beautiful display
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js Server</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #4CAF50;
        }
        p {
          font-size: 20px;
          color: #333;
        }
        .container {
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          display: inline-block;
        }
        .footer {
          margin-top: 30px;
          font-size: 14px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to My Node.js Server</h1>
        <p>Hello, World! This server is running beautifully with Node.js!</p>
        <p>Enjoy this simple, styled web page served directly from the Node.js server!</p>
      </div>
      <div class="footer">
        <p>Running on Node.js with love & care 🧑‍💻</p>
      </div>
    </body>
    </html>
  `;

  res.end(htmlContent); // Send the HTML content in the response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
