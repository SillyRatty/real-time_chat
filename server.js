const http = require('http')
const express = require('express')
const app = express()

const http_server = http.createServer(app)
const io = require('socket.io')(http_server)

function messageFromUser(message){
    console.log('User message: ' + message)
    io.emit('new message', message)
}
io.addListener('connection', (socket) => {
    console.log('user connected')
    socket.addListener('new message', messageFromUser)
})

app.use(express.static('public'))

//To use it with multiple machines over a local network, add your ipv4 down below, as in:
//http_server.listen(1000, 'your ipv4 adress') //Access with ipv4adress:1000
http_server.listen(1000) //Access with localhost:1000
