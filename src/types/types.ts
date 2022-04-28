export type Book = {
  authors: Array<string>
  title: string
  description: string
  pageCount: number
  category: string
  imageUrl: string
  language: string
  isbn10: string
  isbn13: string
  publisher: string
  published: number
  id: string
}

export type User = {
  name: string
  email: string
  birthdate?: string
  gender?: string
  id: string
}
