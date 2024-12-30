const http = require("http");
const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   fs.readFile("sample.txt", (err, data) => {
//     res.end(data);
//   });
// });


const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream("test.txt");
    stream.pipe(res);
  });

server.listen(3000);