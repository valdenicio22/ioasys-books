import styled from 'styled-components'

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: no-repeat url('img/homeBgImg.svg');
  background-size: cover;
`
export const HomeContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
`

export const CardsList = styled.div`
  width: 100%;
  max-height: 52.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(27.2rem, 1fr));
  grid-template-rows: repeat(3, 1fr);
  gap: 1.6rem;
`

export const CardButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`
export const ButtonsPagination = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;

  margin-top: 1.6rem;
`

export const PageInfo = styled.div`
  padding-top: 0.5rem;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`

export const PageNumber = styled.strong`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const PaginationBtn = styled.button`
  background-color: white;
  outline: none;
  border: none;

  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 1px solid rgba(51, 51, 51, 0.4);
  transform: matrix(-1, 0, 0, 1, 0, 0);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
