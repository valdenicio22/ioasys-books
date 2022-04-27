import Logo from 'components/Logo'
import LogoutIcon from 'components/LogoutIcon'
import { useRouter } from 'next/router'
import * as S from './styles'

const Header = () => {
  const router = useRouter()
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <Logo color="black" />
        <S.WelcomeAndLogout>
          <S.Welcome>
            Bem vindo, <S.UserName>Guilherme!</S.UserName>
          </S.Welcome>
          <S.LogoutContainer type="button" onClick={() => router.push('/')}>
            <LogoutIcon />
          </S.LogoutContainer>
        </S.WelcomeAndLogout>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export default Header
