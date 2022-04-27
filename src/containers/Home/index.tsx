import CardBook from 'components/CardBook'
import Header from 'components/Header'
import * as S from './styles'

function Home() {
  return (
    <S.Wrapper>
      <S.HomeContainer>
        <Header />
        <S.CardsList>
          <CardBook />
        </S.CardsList>
      </S.HomeContainer>
    </S.Wrapper>
  )
}

export default Home
