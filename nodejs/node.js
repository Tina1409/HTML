const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS variables/Custom Properties</title>
      <style>
          .box{
              --box-color: aqua;
              width:200px;
              height:200px;
              background-color: var(--box-color);
              border:2px solid red;
              box-shadow: 10px 12px var(--box-color); 
              margin: 12px 10px;
              padding:2px 9px;
          }
  
          .container{
              display: flex;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, similique.</div>
          <div class="box">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repudiandae?</div>
          <div class="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.</div>
      </div>
  </body>
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});