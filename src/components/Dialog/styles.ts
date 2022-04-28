import styled, { css } from 'styled-components'
import Modal from 'react-modal'

export const StyledModal = styled(Modal)`
  &.react-modal-content {
    width: 76.9rem;
    height: 60.8rem;
    background-color: #f0f2f5;
    padding: 6rem 2.5rem;
    border-radius: 2.2rem;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

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
