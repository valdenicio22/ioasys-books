import Button from 'components/Button'
import Logo from 'components/Logo'
import { TextField } from 'components/Textfield'
import { useAuth } from 'context/AuthContext'
import { MouseEvent, useState } from 'react'

import * as S from './styles'
const LoginPage = () => {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSigninClick = async (e: MouseEvent) => {
    e.preventDefault()
    await signIn({ email, password })
  }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.ButtonContainer>
            <Button type="submit" onClick={handleSigninClick}>
              Entrar
            </Button>
          </S.ButtonContainer>
        </S.TextFieldsContainer>
      </S.Form>
    </S.Wrapper>
  )
}

export default LoginPage
