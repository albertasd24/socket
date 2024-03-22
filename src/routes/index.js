import { Router } from "express";
import path, { join } from "path";
import __dirname__ from "../utils/__dirname__.js";
import { logged } from "../middleware/isLogged.js";

const router = Router();

const views = join(__dirname__, "views");


router.get("/",logged, (req, res) => {
    res.sendFile(views + "/index.html");
});
router.get("/register", (req, res) => {
    res.sendFile(views + "/register.html");
});

export default router;