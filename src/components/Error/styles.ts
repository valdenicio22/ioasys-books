import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 24rem;
    height: 4.8rem;
    border-radius: ${theme.border.radius.small};
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    backdrop-filter: blur(2px);

    color: ${theme.colors.white};
    background-color: rgba(255, 255, 255, 0.4);

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid rgba(255, 255, 255, 0.4);
      top: -1.2rem;
      left: 2.4rem;
    }
  `}
`
