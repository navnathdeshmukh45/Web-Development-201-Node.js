const http = require('http');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const PORT = args.port || 3000;

const server = http.createServer((req, res) => {
    // Log incoming requests
    console.log(`${req.method} request for ${req.url}`);

    // Routing
    let filePath = '';
    switch (req.url) {
        case '/':
            filePath = path.join(__dirname, 'home.html');
            break;
        case '/project.html':
            filePath = path.join(__dirname, 'project.html');
            break;
        case '/registration':
            filePath = path.join(__dirname, 'registration.html');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
    }

    // Serve HTML files
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});