import Logo from 'components/Logo'
import LogoutIcon from 'components/LogoutIcon'
import { useAuth } from 'context/AuthContext'
import * as S from './styles'

const Header = () => {
  const { signOut, user } = useAuth()
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <Logo color="black" />
        <S.WelcomeAndLogout>
          <S.Welcome>
            Bem vindo, <S.UserName>{user?.name}!</S.UserName>
          </S.Welcome>
          <S.LogoutContainer type="button" onClick={signOut}>
            <LogoutIcon />
          </S.LogoutContainer>
        </S.WelcomeAndLogout>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export default Header
