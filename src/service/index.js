import axios from "axios"

const connection = axios.create(
    {
        baseURL: 'https://hackaton-cloud-unifeso.herokuapp.com/api/',
        timeout: 10000,    
    }
    
)

export { connection }