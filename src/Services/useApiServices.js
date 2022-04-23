import axios from "axios"
import { API_URL } from "../AppCredentials"
export const UseApiService = async (type, payload, params) => new Promise((resolve, reject) => {
    console.log(`${API_URL}/${params}`)
    axios[type](`${API_URL}${params}`, payload.data).then((res) => {
        resolve(res)
    })
})
