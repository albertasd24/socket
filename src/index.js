import Express from "express";
import { createServer } from "http"
import path, { join } from "path";
import __dirname__ from "./utils/__dirname__.js";
import { serverIo } from "./realTimeServer.js";
import routes from "./routes/index.js"; 
import cookieParser from "cookie-parser";

const app = Express();
const httpServer = createServer(app);
// Settings
app.set("port", process.env.PORT || 3400);
app.set("views", join(__dirname__,"views"));
app.use(cookieParser())
// Routes
app.use(routes);

// Public
app.use(Express.static(join(__dirname__,"public")));

// Run server
httpServer.listen(app.get("port"), ()=>{
    console.log(`Server run in port ${app.get("port")}✨`);
});

// Server real time Socket.io
serverIo(httpServer);
