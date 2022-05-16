import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Modal from 'react-modal'

export const StyledModal = styled(Modal)`
  &.react-modal-content {
    width: 76.9rem;
    height: 60.8rem;
    background-color: #f0f2f5;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
    border-radius: 0.4rem;
    padding: 4.8rem;
    overflow-y: auto;

    ${media.lessThan('small')`
      width: 28.8rem;
      height: 100%;
      padding: 2.4rem 2.4rem 3.2rem;
    `}
  }
`

export const CloseBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;

  ${media.lessThan('small')`
    width: 2.5rem;
    height: 2.5rem;
  `}

  position: absolute;
  right: 2rem;
  top: 2rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.medium};
  `}

  border-radius: 50%;
  border: 1px solid rgba(51, 51, 51, 0.2);

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`
