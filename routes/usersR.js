import express from "express";
import { registerUser,getUsers } from "../ctrls/usersC.js";

const router = express.Router();


router.get("/",getUsers);
router.post("/register",registerUser);

export default router;