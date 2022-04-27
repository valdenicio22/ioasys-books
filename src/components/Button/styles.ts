import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type Props = Pick<ButtonProps, 'fullWidth'>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<Props>`
  ${({ theme, fullWidth }) => css`
    outline: none;
    border: none;
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkPink};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.medium};
    line-height: 2rem;
    padding: 0.8rem 2rem;

    border-radius: ${theme.border.radius.large};

    ${fullWidth && wrapperModifiers.fullWidth()}
  `}
`
