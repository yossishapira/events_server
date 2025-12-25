
import { readFromFile, writeToFile } from "../servicess/reading_writing.js";
const path_tickets = "./data/tickets.json"
const path_users = "./data/users.json"
const path_events = "./data/events.json"



const getTickets = async (req, res) => {
    try {
        const tickets = await readFromFile(path);
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: "Failed to read tickets file" });
    }
}
const registerNewTicket = async (req, res) => {
    try {
        const { username, password, eventName, quantity } = req.body;
        const users = await readFromFile(path_users);
        const user = users.find(u => u.username === username && u.password === password);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const events = await readFromFile(path_events);
        const event = events.find(u => u.eventName === eventName);
        console.log(event)

        if (event) {
            if (event.ticketsForSale >= Number(quantity)) {
                const newTicket = {
                    username: username,
                    password: password,
                    eventName: eventName,
                    quantity: Number(quantity)
                };
                const tickets = await readFromFile(path_tickets);
                tickets.push(newTicket)
                await writeToFile(path_tickets, tickets)
                event.ticketsForSale -= newTicket.quantity
                await writeToFile(path_events, events)
                return res.status(201).json({ "message": "Tickets registered successfully" });


            }
            else {
                return res.json({ error: "There are not enough tickets to purchase." });
            }
        }
        return res.status(404).json({ error: "There is no such light" });


    } catch (error) {
        res.status(500).json({ error: "Failed to create tickets" })
    }
};



export {
    getTickets,
    registerNewTicket,

}