const http = require("http"); 
const fs = require('fs').promises;
const host = 'localhost';
let port = 8000;

let index1, index2, index3;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    switch(req.url){
        case "index1":
            res.writeHead(200);
            res.end(index1);
            break;
        case "index2":
            res.writeHead(200);
            res.end(index2);
            break;
        case "index3":
            res.writeHead(200);
            res.end(index3);
            break;
        default:
            res.writeHead(404);
           // res.end(console.log("Resource not found");
           
    }
   
};
/*const server = http.createServer(requestListener);
fs.readFile("C:\Users\TAOFEEK\Documents\nodeWorks\files" + "/index1.html") 
            .then(contents => {
                index1= contents;
                server.listen(port, host, () => {
                    console.log(`Server is running on http://${host}:${port}`);
  
                });
                
                res.end(index1);
            })
            .catch(err => {
                console.error(`Server is read index.html file on file:${host}:${port}`);
                res.writeHead(500);
                res.end(index2);
                return;
            });
    
*/
