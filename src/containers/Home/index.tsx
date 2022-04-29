import CardBook from 'components/CardBook'
import Header from 'components/Header'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import * as S from './styles'
import { Book } from '../../types/types'
import { Dialog } from '../../components/Dialog'
import BookDetails from 'components/BookDetails'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])
  const [isSelectedCard, setIsSelectedCard] = useState('')

  useEffect(() => {
    try {
      api
        .get<{ data: Book[] }>('/books?page=1&amount=25')
        .then((response) => setBooks(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleCloseModal = () => setIsSelectedCard('')

  return (
    <S.Wrapper>
      {isSelectedCard && (
        <Dialog isModalOpen={!!isSelectedCard} onCloseModal={handleCloseModal}>
          <BookDetails
            isSelectedCard={isSelectedCard}
            setIsSelectedCard={setIsSelectedCard}
          />
        </Dialog>
      )}

      <S.HomeContainer>
        <Header />
        <S.CardsList>
          {!books && <p>Loading</p>}
          {books &&
            books.map((book) => (
              <S.CardButton
                key={book.id}
                onClick={() => setIsSelectedCard(book.id)}
              >
                <CardBook book={book} />
              </S.CardButton>
            ))}
        </S.CardsList>
      </S.HomeContainer>
    </S.Wrapper>
  )
}
