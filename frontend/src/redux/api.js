import axios from 'axios'
const Api= axios.create({baseURL:'http://localhost:8000'})

export const signIn=(formData)=>Api.post('/api/auth',formData)
export const signUp=(formData)=>Api.post('/api/users',formData)

export const products=(formData)=>Api.get('/api/products')