import { connection } from "../";

export async function CreateAula(aula) {
    try {
        const response = await connection.post("/aulas", aula)
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