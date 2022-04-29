import CardBook from 'components/CardBook'
import Header from 'components/Header'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import * as S from './styles'
import { Book } from '../../types/types'
import { Dialog } from '../../components/Dialog'
import BookDetails from 'components/BookDetails'
import { ChevronLeft, ChevronRight } from '@styled-icons/evil'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])
  const [totalPages, setTotalPages] = useState(-1)
  const [isSelectedCard, setIsSelectedCard] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    try {
      api
        .get<{ data: Book[]; totalPages: number }>(
          `/books?page=${currentPage}&amount=12`
        )
        .then((response) => {
          setBooks(response.data.data)
          setTotalPages(Math.ceil(response.data.totalPages))
        })
    } catch (error) {
      console.log(error)
    }
  }, [currentPage])

  const handleCloseModal = () => setIsSelectedCard('')

  return (
    <S.Wrapper>
      {isSelectedCard && (
        <Dialog isModalOpen={!!isSelectedCard} onCloseModal={handleCloseModal}>
          <BookDetails isSelectedCard={isSelectedCard} />
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
        <S.ButtonsPagination>
          <S.PageInfo>
            Página <S.PageNumber>{currentPage}</S.PageNumber> de{' '}
            <S.PageNumber>{totalPages}</S.PageNumber>
          </S.PageInfo>
          <S.ButtonsContainer>
            <S.PaginationBtn disabled={currentPage === 1}>
              <ChevronRight
                width={25}
                height={25}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              />
            </S.PaginationBtn>
            <S.PaginationBtn disabled={currentPage === totalPages}>
              <ChevronLeft
                width={25}
                height={25}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              />
            </S.PaginationBtn>
          </S.ButtonsContainer>
        </S.ButtonsPagination>
      </S.HomeContainer>
    </S.Wrapper>
  )
}
