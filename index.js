

const PORT = 5000;

const http = require("http");
 
const server = http.createServer((req, res)=>{

        // console.log(process.argv);
    
        res.writeHead(200);

        // res.write("This is demo data coming from backend!");

        const data = JSON.stringify([
                {
                   "userId" : 2,
                    "id" : "test",
                    "title" : "delectus aut autem",
                    "completed" : false
                },

                {
                    "userId" : 2,
                     "id" : "suraj",
                     "title" : "delectus aut autem",
                     "completed" : false
                },
                
     ]);

        res.write(data);

        res.end();
});

server.listen(PORT);