import Button from 'components/Button'
import Logo from 'components/Logo'
import { TextField } from 'components/Textfield'
import * as S from './styles'
const LoginPage = () => {
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
            <Button>Entrar</Button>
          </S.ButtonContainer>
        </S.TextFieldsContainer>
      </S.Form>
    </S.Wrapper>
  )
}

export default LoginPage
