import { connection } from "../";

export async function CreateUser(user) {
    try {
        const response = await connection.post("/usuarios", user)
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function ListAllUsers() {
    try {
        const response = await connection.get("/usuarios?pageSize=100")
        return response.data.content
    } catch (error) {
        console.error(error)
    }
}