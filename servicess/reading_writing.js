import fs from "fs/promises"

async function readFromFile(path) {
    try {
        const data = await fs.readFile(path, "utf8")
        return JSON.parse(data)
    } catch {
        return []
    }
}


async function writeToFile(path,arr) {
   try {
     await fs.writeFile(path,JSON.stringify(arr, null, 2)
     );
   } catch (error) {
    console.error(error);
        return null;
   }
}


export {
    readFromFile,
    writeToFile
}