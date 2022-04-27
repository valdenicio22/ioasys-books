import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  padding: 4.2rem 0;
`
export const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WelcomeAndLogout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`

export const Welcome = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 1.6rem;
  padding-bottom: 0.4rem;
`

export const UserName = styled.strong`
  font-weight: ${({ theme }) => theme.font.weight.medium};
`

export const LogoutContainer = styled.button`
  outline: none;
  border: none;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`
