import Button from 'components/Button'
import Logo from 'components/Logo'
import { TextField } from 'components/Textfield'
import { useRouter } from 'next/router'
import * as S from './styles'
const LoginPage = () => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.Form>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
        <S.TextFieldsContainer>
          <TextField
            label="Email"
            labelFor="email"
            placeholder="books@ioasys.com.br"
          />
          <TextField label="Senha" type="senha" placeholder="********" />
          <S.ButtonContainer>
            <Button type="button" onClick={() => router.push('/home')}>
              Entrar
            </Button>
          </S.ButtonContainer>
        </S.TextFieldsContainer>
      </S.Form>
    </S.Wrapper>
  )
}

export default LoginPage
