import { Dispatch, SetStateAction, useEffect } from 'react'
import { api } from 'service/api'
import { Book } from 'types/types'
import * as S from './styles'

type BookDetailsProps = {
  isSelectedCard: Book['id']
  setIsSelectedCard: Dispatch<SetStateAction<string>>
}

const BookDetails = ({
  isSelectedCard,
  setIsSelectedCard
}: BookDetailsProps) => {
  useEffect(() => {
    try {
      api
        .get(`/books/${isSelectedCard}`)
        .then((response) => console.log(response))
    } catch (error) {
      console.log(error)
    }
  }, [isSelectedCard])
  return (
    <S.Wrapper>
      {isSelectedCard}{' '}
      <button onClick={() => setIsSelectedCard('')}>Click me</button>{' '}
    </S.Wrapper>
  )
}

export default BookDetails
