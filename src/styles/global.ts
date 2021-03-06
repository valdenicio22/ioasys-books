import { createGlobalStyle, css } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; //10px - 1rem
    }
    body {
      -webkit-font-smoothing: antialiased;
    }
    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.sizes.medium};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.weight.medium};
    }
  `}
  .react-modal-overlay {
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      ${media.lessThan('small')`
        padding: 6.4rem 1.6rem 1.6rem;
      `}
    }
`
export default GlobalStyles
