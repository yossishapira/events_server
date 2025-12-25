import express from "express";
import reportsUsers from "./routes/usersR.js";
import reportsEvents from "./routes/eventsR.js";
import reportsTicketsR from "./routes/ticketsR.js";


const app = express();
const port = 3010;

app.use(express.json());

app.use("/user", reportsUsers);
app.use("/user", reportsTicketsR);
app.use("/event",reportsEvents)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})