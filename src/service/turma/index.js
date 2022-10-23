import { connection } from ".."

export async function ListAllTurmas() {
    try {
        const response = await connection.get("/turmas")
        return response.data
    } catch (error) {
        console.error(error)
    }
}


