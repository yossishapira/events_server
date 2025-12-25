import { readFromFile,writeToFile } from "../servicess/reading_writing.js";
const path = "./data/users.json"




const getUsers = async (req, res) => {
    try {
        const users = await readFromFile(path);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to read users file" });
    }
}

const registerUser = async (req, res) => {
    try {
        const { username,password } = req.body;
        const users = await readFromFile(path);
        const user = users.find(u => u.username === username);
        if (!user) {
            const newUser = {
            username: username,
            password:password
        };
        users.push(newUser)
        await writeToFile(path,users)
    
        return res.status(201).json({"message": "User registered successfully"});

           
        }
        return res.status(404).json({ error: "User already exists" });
        
        
    } catch (error) {
        res.status(500).json({ error: "Failed to create user" })
    }
};



export {
    getUsers,
    registerUser,

}