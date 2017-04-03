const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var pageHTML = '<html>' +
                    '<head>' +
                        '<title>Sample Server</title>' +
                        '<meta charset="utf-8">' +
                    '</head>' +
                    '<body>' +
                        '<form method="post" action="">' +
                            '<div>' +
                                '<label for="nickname">Nickname:</label>'+
                                '<input type="text" name="nickname">' +
                            '</div>' +
                            '<div>' +
                                '<input type="submit" value="send it">' +
                            '</div>' +
                        '</form>' +
                    '</body>' +
                '</html>';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(pageHTML);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});