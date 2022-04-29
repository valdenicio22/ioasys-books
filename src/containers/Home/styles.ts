import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`
export const HomeContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
`

export const CardsList = styled.div`
  width: 100%;
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
