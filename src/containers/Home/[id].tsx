import { GetServerSideProps } from 'next'
import * as S from './bookDetailsStyle'
import axios from 'axios'
import { parseCookies } from 'nookies'
import { Book } from 'types/types'
const BookDetails = () => {
  return <S.Wrapper>BookDetails</S.Wrapper>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const bookId = ctx.params?.id
  const cookies = parseCookies(ctx)
  if (cookies) {
    const response = await axios.get<Book>(
      `https://books.ioasys.com.br/api/v1/books/${bookId}`,
      {
        headers: {
          Authorization: `Bearer ${cookies.bookToken}`
        }
      }
    )
    return {
      props: {
        bookData: response.data
      }
    }
  } else {
    return {
      props: {
        bookData: []
      }
    }
  }
}

export default BookDetails