const http = require('http');


// Criar servidor

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 200;
    res.end('<h1>hello world</h1>')
})


//Ouvir a porta: 
server.listen(3000, () => {
    console.log('Servidor Ativo!')
})
