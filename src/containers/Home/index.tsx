import CardBook from 'components/CardBook'
import Header from 'components/Header'
import { useEffect, useState } from 'react'
import { api } from 'service/api'
import * as S from './styles'
import { Book } from '../../types/types'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    api
      .get('/books?page=1&amount=25')
      .then((response) => setBooks(response.data.data))
  }, [])

  return (
    <S.Wrapper>
      <S.HomeContainer>
        <Header />
        <S.CardsList>
          {books ? (
            books.map((book) => <CardBook book={book} key={book.id} />)
          ) : (
            <p>Loading</p>
          )}
        </S.CardsList>
      </S.HomeContainer>
    </S.Wrapper>
  )
}
