import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/'
})
api.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTEwODY5MDk2MTcsImlhdCI6MTY1MTA5MDUwOTYxN30.fhhI6HiXjNgCdWdZeaQJpQA8lL2Wucf0-zjfmgAGdAg`
api.defaults.headers.common[
  'refresh-token'
] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTEwODY5MDk2MTcsImlhdCI6MTY1MTEwMTMwOTYxN30.j2JI-McLGDyB9DiqjN50jGocXsgORzwncNrKTUDWaIo`
