import { readFromFile,writeToFile } from "../servicess/reading_writing.js";
const path_events = "./data/events.json"
const path_users = "./data/users.json"



const getEvents = async (req, res) => {
    try {
        const events = await readFromFile(path);
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "Failed to read events file" });
    }
}
const registerNewEvent = async (req, res) => {
    try {
        const { eventName,ticketsForSale,username,password} = req.body;
        console.log("bvahusv")
        const users = await readFromFile(path_users);
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const events = await readFromFile(path_events);
        const event = events.find(u => u.eventName === eventName);
        if (!event) {
            const newEvent = {
            eventName:eventName, 
            ticketsForSale: Number(ticketsForSale),
            username:username,
            password:password
        };
        events.push(newEvent)
        await writeToFile(path_events,events)
    
        return res.status(201).json({"message": "Event created successfully"});

           
        }
        return res.status(404).json({ error: "Event already exists" });
        
        
    } catch (error) {
        res.status(500).json({ error: "Failed to create event" })
    }
};

export {
    getEvents,
    registerNewEvent,

}