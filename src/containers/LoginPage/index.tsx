import Button from 'components/Button'
import Logo from 'components/Logo'
import { TextField } from 'components/Textfield'
import * as S from './styles'
const LoginPage = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <TextField placeholder="books@ioasys.com.br" />
      <Button>Entrar</Button>
    </S.Wrapper>
  )
}

export default LoginPage
