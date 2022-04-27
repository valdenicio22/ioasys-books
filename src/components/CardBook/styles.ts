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
  //width: fit-content;
  //img {
  //  width: 8.1rem;
  //height: 12.2rem;
  //}
  width: 8.1rem;
  height: 12.2rem;
  background-color: red;
`

export const BookInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2.5rem;
`
export const BookTitleAndAuthor = styled.div``
export const BookTitle = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 2rem;
  font-size: ${({ theme }) => theme.font.sizes.small};
`
export const Author = styled.p`
  color: ${({ theme }) => theme.colors.lightPink};
  line-height: 2rem;
`
export const BookDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  line-height: 2rem;
  gap: 0.5rem;
`
export const Detail = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`
