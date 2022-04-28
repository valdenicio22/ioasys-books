import CardBook from 'components/CardBook'
import Header from 'components/Header'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import * as S from './styles'
import { Book } from '../../types/types'
import Link from 'next/link'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    api
      .get<{ data: Book[] }>('/books?page=1&amount=25')
      .then((responde) => setBooks(responde.data.data))
  }, [])

  return (
    <S.Wrapper>
      <S.HomeContainer>
        <Header />
        <S.CardsList>
          {!books && <p>Loading</p>}
          {books &&
            books.map((book) => (
              <Link href={`/home/${book.id}`} key={book.id} passHref>
                <a>
                  <CardBook book={book} />
                </a>
              </Link>
            ))}
        </S.CardsList>
      </S.HomeContainer>
    </S.Wrapper>
  )
}
