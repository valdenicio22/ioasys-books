import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: no-repeat center/cover url('img/landingBgImg.svg');

  position: relative;
`

export const Form = styled.form`
  width: 36.8rem;
  height: 22.4rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  position: absolute;
  top: 27.4rem;
  left: 11.5rem;
`

export const LogoContainer = styled.div`
  img {
    width: 10.44rem;
    height: 3.6rem;
  }
`
export const TextFieldsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.6rem;

  margin-top: 5rem;
  margin-bottom: 1.6rem;

  position: relative;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
`
export const ErrorContainer = styled.div`
  margin-top: 2.4rem;
`
