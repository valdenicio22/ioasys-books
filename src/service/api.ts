import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/'
})
api.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTExMDk4ODQ2MTUsImlhdCI6MTY1MTExMzQ4NDYxNX0.diQb898aYd7WqmJwFvBTZCRkUBE1VLjGCN5IEV0OPHc`
api.defaults.headers.common[
  'refresh-token'
] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTExMDk4ODQ2MTUsImlhdCI6MTY1MTEyNDI4NDYxNX0.kbBWBzEP0B9D9C2BOLOJjrR_kQk9qTiNTusEP4s-rfE`
