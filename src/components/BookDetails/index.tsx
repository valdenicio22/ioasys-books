import { useEffect, useState } from 'react'
import { api } from 'service/api'
import { Book } from 'types/types'
import * as S from './styles'
import CircularProgress from '@mui/material/CircularProgress'

type BookDetailsProps = {
  isSelectedCard: Book['id']
}

const BookDetails = ({ isSelectedCard }: BookDetailsProps) => {
  const [bookDetails, setBookDetails] = useState<Book>()
  useEffect(() => {
    try {
      api
        .get(`/books/${isSelectedCard}`)
        .then((response) => setBookDetails(response.data))
    } catch (error) {
      console.log(error)
    }
  }, [isSelectedCard])
  return (
    <>
      {!bookDetails ? (
        <S.LoadingContainer>
          <CircularProgress color="secondary" size={100} />
        </S.LoadingContainer>
      ) : (
        <S.Wrapper>
          <S.BookImage>
            <img
              src={
                bookDetails?.imageUrl
                  ? bookDetails?.imageUrl
                  : '/img/bookImgPlaceholder.svg'
              }
              alt={bookDetails?.title}
            />
          </S.BookImage>
          <S.BookDetailsContainer>
            <S.TitleAndAuthors>
              <S.Title>{bookDetails?.title}</S.Title>
              {bookDetails?.authors &&
                bookDetails?.authors.map((author, index) =>
                  bookDetails?.authors.length - 1 === index ? (
                    <S.Author key={author}>{author}</S.Author>
                  ) : (
                    <S.Author key={author}>{author}, </S.Author>
                  )
                )}
            </S.TitleAndAuthors>

            <S.BookInfo>
              <S.BookInfoTitle>Informações</S.BookInfoTitle>
              <S.BookListInfo>
                <S.ItemTitle>
                  Páginas <S.ItemData>{bookDetails?.pageCount}</S.ItemData>
                </S.ItemTitle>
                <S.ItemTitle>
                  Editora <S.ItemData>{bookDetails?.publisher}</S.ItemData>
                </S.ItemTitle>
                <S.ItemTitle>
                  Publicação <S.ItemData>{bookDetails?.published}</S.ItemData>
                </S.ItemTitle>
                <S.ItemTitle>
                  Publicação <S.ItemData>{bookDetails?.published}</S.ItemData>
                </S.ItemTitle>
                <S.ItemTitle>
                  Idioma <S.ItemData>{bookDetails?.language}</S.ItemData>
                </S.ItemTitle>
                <S.ItemTitle>
                  Título Original <S.ItemData>{bookDetails?.title}</S.ItemData>
                </S.ItemTitle>
                <S.ItemTitle>
                  ISBN-10 <S.ItemData>{bookDetails?.isbn10}</S.ItemData>
                </S.ItemTitle>
                <S.ItemTitle>
                  ISBN-13 <S.ItemData>{bookDetails?.isbn13}</S.ItemData>
                </S.ItemTitle>
              </S.BookListInfo>
            </S.BookInfo>

            <S.PublisherReview>
              <S.PublisherReviewTitle>
                RESENHA DA EDITORA
              </S.PublisherReviewTitle>
              <S.Review>
                <img src="img/quotes.svg" width={17} height={14} />
                {bookDetails?.description}
              </S.Review>
            </S.PublisherReview>
          </S.BookDetailsContainer>
        </S.Wrapper>
      )}
    </>
  )
}

export default BookDetails
