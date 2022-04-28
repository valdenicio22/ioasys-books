import axios from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/'
})
api.defaults.headers.common['Authorization'] = `Bearer ${cookies.booksToken}`
