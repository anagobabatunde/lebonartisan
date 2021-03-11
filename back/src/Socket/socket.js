const socketIo = require('socket.io');

class SocketService {
    constructor(server) {
        this.io = socketIo(server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST", "DELETE", "PATCH"],
                // allowedHeaders: ["my-custom-header"],
                credentials: true
            }
        });
        this.io.on('connection', socket => {
            console.log('user connected')
        });
    }

    emiter(event, body) {
        if (body)
            this.io.emit(event, body);
    }
}

module.exports = SocketService;