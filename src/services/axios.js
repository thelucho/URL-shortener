import axios from "axios"

const key = import.meta.env.VITE_API_KEY

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { Authorization: `Bearer ${key}` }
})

export default api