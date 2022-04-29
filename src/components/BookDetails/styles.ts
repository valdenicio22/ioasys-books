import styled, { css } from 'styled-components'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4.8rem;

  display: flex;
  align-items: center;
  gap: 4.8rem;
`
export const BookImage = styled.div`
  max-width: 34.9rem;
  max-height: 51.29rem;
  img {
    width: 100%;
    height: 100%;
  }
`
export const BookDetailsContainer = styled.div`
  max-width: 27.6rem;
  width: 100%;
  height: 100%;
`

export const TitleAndAuthors = styled.div`
  width: 100%;
  padding-bottom: 3.2rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: 2rem;
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.black};

    text-overflow: ellipsis;
    overflow: hidden;
  `}
`
export const Author = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.lightPink};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const BookInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 3.2rem;
`
export const BookInfoTitle = styled.p`
  padding-bottom: 1rem;
`
export const BookListInfo = styled.ul`
  width: 100%;
  list-style: none;
`
export const ItemTitle = styled.li`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`
export const ItemData = styled.span`
  ${({ theme }) => css`
    line-height: 2rem;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const PublisherReview = styled.div`
  max-width: 27.6rem;
  max-height: 17rem;
`
export const PublisherReviewTitle = styled.h2`
  ${({ theme }) => css`
    line-height: 2rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};
    padding-bottom: 1rem;
  `}
`
export const Review = styled.p`
  ${({ theme }) => css`
    max-height: 16rem;
    line-height: 2rem;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xsmall};
  `}
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  text-align: justify;
  text-overflow: ellipsis;
  overflow: hidden;

  img {
    margin-right: 0.3rem;
  }
`
