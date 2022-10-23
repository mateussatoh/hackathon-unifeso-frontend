import { connection } from "../";

export async function CreateUser(user) {
    console.log("🚀 ~ file: index.js ~ line 4 ~ CreateUser ~ user", user)
    
    try {
        const response = await connection.post('usuarios', user)
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


export async function ListAllAlunos() {
    try {
        const response = await connection.get("/usuarios/todosAlunos")
        return response.data
    } catch (error) {
        console.error(error)
    }
}


export async function ListAllProfessores() {
    try {
        const response = await connection.get("/usuarios/todosProfessores")
        return response.data
    } catch (error) {
        console.error(error)
    }
}

