import Button from 'components/Button'
import Error from 'components/Error'
import Logo from 'components/Logo'
import { TextField } from 'components/Textfield'
import { useAuth } from 'context/AuthContext'
import { MouseEvent, useEffect, useState } from 'react'

import * as S from './styles'
const LoginPage = () => {
  const { signIn, error, setError } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSigninClick = async (e: MouseEvent) => {
    e.preventDefault()
    await signIn({ email, password })
  }

  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

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
        {error && (
          <S.ErrorContainer>
            <Error />{' '}
          </S.ErrorContainer>
        )}
      </S.Form>
    </S.Wrapper>
  )
}

export default LoginPage
