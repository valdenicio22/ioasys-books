import { Book } from 'types/types'
import * as S from './styles'

type CardBookProps = {
  book: Book
}

const CardBook = ({ book }: CardBookProps) => {
  console.log(book)
  return (
    <S.Wrapper>
      <S.ImgContainer>
        {book.imageUrl ? (
          <img src={book.imageUrl} alt={book.title} />
        ) : (
          <img src="/img/bookImgPlaceholder.svg" alt="Imagem não carregou" />
        )}
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
