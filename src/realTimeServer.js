import { Server } from "socket.io"
export const serverIo = httpServer => {
    let messages = []
    const io = new Server(httpServer);
    io.on("connection", socket => {
        console.log(socket.id);
        // Obtener las cookies del handshake y parsearlas
        const cookies = socket.handshake.headers.cookie;
        const parts = cookies.split(';');

        // Filtrar las partes que contienen "username="
        const usernamePart = parts.find(part => part.includes('username='));
        
        // Si se encontró la parte con "username=", extraer el valor
        let usernameValue;
        if (usernamePart) {
            // Obtener el valor después del signo igual
            usernameValue = usernamePart.split('=')[1].trim();
        }
        
        socket.on("message", message => {
            // messages.push({
            //     user: "Stive",
            //     message
            // })
            io.emit("message", {
                user: usernameValue,
                message
            })
        })
    })
}