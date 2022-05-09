import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const LabelContainer = styled.div`
  width: fit-content;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: rgba(255, 255, 255, 0.5);
  `}
`

export const InputWrapper = styled.div`
  width: fit-content;

  &:focus-within {
    border-color: #2072ac;
  }
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};

    border: none;
    background: transparent;
    outline: none;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 36.8rem;
    height: 6rem;

    ${media.lessThan('small')`
      width: 28.8rem;
    `}

    background: rgba(0, 0, 0, 0.32);
    padding: 0.4rem 1.6rem;
    border-radius: ${theme.border.radius.small};

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  `}
`
