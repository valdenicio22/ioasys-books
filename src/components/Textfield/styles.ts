import styled, { css } from 'styled-components'
import { TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'fullWidth' | 'size'>

export const LabelContainer = styled.div``

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  `}
`

export const InputWrapper = styled.div`
  width: 100%;

  &:focus-within {
    border-color: #2072ac;
  }
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};

    margin-top: 0.5rem;
    border: none;
    background: transparent;
    outline: none;

    ::placeholder {
      color: ${theme.colors.white};
    }
  `}
`

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  smallSize: () => css`
    width: 28.8rem;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ fullWidth, theme, size }) => css`
    width: 36.8rem;
    height: 6rem;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    padding: 0.8rem 1.6rem;
    border-radius: ${theme.border.radius.small};

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    ${fullWidth && wrapperModifiers.fullWidth()}
    ${size === 'small' && wrapperModifiers.smallSize()}
  `}
`
