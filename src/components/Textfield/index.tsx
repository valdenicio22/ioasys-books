import {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction
} from 'react'

import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  { label, labelFor = '', ...props }: TextFieldProps,
  ref
) => {
  return (
    <S.Wrapper>
      <S.LabelContainer>
        {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      </S.LabelContainer>
      <S.InputWrapper>
        <S.Input type="text" {...props} ref={ref} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export const TextField = forwardRef(InputBase)
