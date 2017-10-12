const net = require('net');

const PORT = 3000;
const ADDRESS = '127.0.0.1';

let server = net.createServer(onClientConnected);
server.listen(PORT,ADDRESS);

function onClientConnected(socket){
    socket.write("Welcome " + "\n");
}