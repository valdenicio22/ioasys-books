import { Book } from 'types/types'
import * as S from './styles'

type CardBookProps = {
  book: Book
}

const CardBook = ({ book }: CardBookProps) => {
  return (
    <S.Wrapper>
      <S.ImgContainer>
        <img src={book.imageUrl} alt={book.title} />
      </S.ImgContainer>
      <S.BookInfo>
        <S.BookTitleAndAuthor>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.Author>{book.authors}</S.Author>
        </S.BookTitleAndAuthor>
        <S.BookDetails>
          <S.Detail>{book.pageCount}</S.Detail>
          <S.Detail>{book.published}</S.Detail>
          <S.Detail>Publicado {book.publisher}</S.Detail>
        </S.BookDetails>
      </S.BookInfo>
    </S.Wrapper>
  )
}

export default CardBook
