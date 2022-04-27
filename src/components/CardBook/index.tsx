import * as S from './styles'

const CardBook = () => {
  return (
    <S.Wrapper>
      <S.ImgContainer>IMG</S.ImgContainer>
      <S.BookInfo>
        <S.BookTitleAndAuthor>
          <S.BookTitle>Crossing the Chasm</S.BookTitle>
          <S.Author>Geoffrey A. Moore</S.Author>
        </S.BookTitleAndAuthor>
        <S.BookDetails>
          <S.Detail>150 páginas</S.Detail>
          <S.Detail>Editora Loyola</S.Detail>
          <S.Detail>Publicado em 2020</S.Detail>
        </S.BookDetails>
      </S.BookInfo>
    </S.Wrapper>
  )
}

export default CardBook
