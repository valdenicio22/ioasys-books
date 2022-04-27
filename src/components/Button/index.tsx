import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, fullWidth = false, ...props }: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} {...props}>
    {children}
  </S.Wrapper>
)
export default Button
