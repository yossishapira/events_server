import { readFromFile } from "../servicess/reading_writing.js"
const path = "./data/users.json"

export const validateUser = async (req, res, next) => {
    try {
        const username= req.headers.username
        const password = req.headers.password
        const users = await readFromFile(path)
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            next()
        }
        else {
            res.status(401)
        }
    } catch (err) {
        console.log(401)

    }
}