import Logo from 'components/Logo'
import LogoutIcon from 'components/LogoutIcon'
import { useAuth } from 'context/AuthContext'
import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

type HeaderProps = {
  setCurrentPage: Dispatch<SetStateAction<number>>
}

const Header = ({ setCurrentPage }: HeaderProps) => {
  const { signOut, user } = useAuth()
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.LogoContainer onClick={() => setCurrentPage(1)}>
          <Logo color="black" />
        </S.LogoContainer>
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
