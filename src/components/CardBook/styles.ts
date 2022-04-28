import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 27.2rem;
  height: 16rem;

  padding: 2rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius.small};

  display: flex;
  align-items: center;
  gap: 1.6rem;

  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
`

export const ImgContainer = styled.div`
  width: fit-content;
  img {
    width: 8.1rem;
    height: 12.2rem;
  }
`

export const BookInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
export const BookTitleAndAuthor = styled.div`
  height: 7rem;
  overflow: hidden;
`

export const BookTitle = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.black};
`

export const Author = styled.p`
  color: ${({ theme }) => theme.colors.lightPink};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`
export const BookDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
export const Detail = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`
