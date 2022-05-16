import * as S from './styles'

type ErrorProps = {
  children: string
}

const Error = ({ children }: ErrorProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Error
