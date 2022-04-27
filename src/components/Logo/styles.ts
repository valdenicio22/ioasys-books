import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  ${({ theme, color }) => css`
    & > svg {
      color: ${theme.colors[color!]};
    }

    span {
      color: ${theme.colors[color!]};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.weight.light};
    }
  `}
`
