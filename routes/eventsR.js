import express from "express";
import { getEvents,registerNewEvent } from "../ctrls/eventsC.js";

const router = express.Router();

router.post("/creator/events",registerNewEvent);

export default router;