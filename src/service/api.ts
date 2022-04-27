import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/'
})
api.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTEwOTE2NTYxMjQsImlhdCI6MTY1MTA5NTI1NjEyNH0.ziDRQ9w-qlASkB6IzU0CQ7mPZuFvLO0R7T8yS2J9zos`
api.defaults.headers.common[
  'refresh-token'
] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTEwOTE2NTYxMjQsImlhdCI6MTY1MTEwNjA1NjEyNH0.rpq9bfU34gpKuM7xKvND8qNdTkGbPGthzM_8pKQlyQw`
