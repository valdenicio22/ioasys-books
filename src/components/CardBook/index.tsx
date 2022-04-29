import { Book } from 'types/types'
import * as S from './styles'

type CardBookProps = {
  book: Book
}

const CardBook = ({ book }: CardBookProps) => {
  return (
    <S.Wrapper>
      <S.ImgContainer>
        <img
          src={book.imageUrl ? book.imageUrl : '/img/bookImgPlaceholder.svg'}
          alt={book.title}
        />
      </S.ImgContainer>
      <S.BookInfo>
        <S.BookTitleAndAuthor>
          <S.BookTitle>{book.title}</S.BookTitle>
          {book.authors.length < 1 && <S.Author>{book.authors}</S.Author>}
          {book.authors.length > 1 && (
            <S.Author>{`${book.authors[0]}, ${book.authors[1]}`} </S.Author>
          )}
        </S.BookTitleAndAuthor>
        <S.BookDetails>
          <S.Detail>{book.pageCount} páginas</S.Detail>
          <S.Detail>Editora {book.publisher.split(' ')[0]}</S.Detail>
          <S.Detail>Publicado em {book.published}</S.Detail>
        </S.BookDetails>
      </S.BookInfo>
    </S.Wrapper>
  )
}

export default CardBook
