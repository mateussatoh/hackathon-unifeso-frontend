import { connection } from "../";

export async function CreateAula(aula) {
    console.log("🚀 ~ file: index.js ~ line 4 ~ CreateAula ~ aula", aula)
    try {
        var bodyFormData = new FormData()
        bodyFormData.append('arquivoExercicio', aula.arquivoExercicio);
        bodyFormData.append('arquivoMateria', aula.arquivoMateria);
        bodyFormData.append('dataAula', aula.dataAula);
        bodyFormData.append('descricao', aula.descricao);
        bodyFormData.append('nome', aula.nome);
        bodyFormData.append('urlVideo', aula.urlVideo);
        const response = await connection.post("/aulas", bodyFormData)
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function ListAllAulas() {
    try {
        const response = await connection.get("/aulas?pageSize=100")
        return response.data.content
    } catch (error) {
        console.error(error)
    }
}