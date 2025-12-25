import express from "express";
import {registerNewTicket } from "../ctrls/ticketsC.js";
const router = express.Router();



router.post("/tickets/buy",registerNewTicket);

export default router;