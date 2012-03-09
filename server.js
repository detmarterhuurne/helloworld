require("http").createServer(function(req, res) {
    res.writeHead(200);
    res.end("Welcome to Amsterdam, detmar");
}).listen(process.env.C9_PORT);