import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import Router from 'next/router'

import { setCookie, destroyCookie, parseCookies } from 'nookies'

import { api } from 'service/api'
import { User } from 'types/types'

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  setUser: (arg: User) => void
  signOut: () => void
  user?: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const logout = () => {
  destroyCookie(undefined, 'booksToken')
  destroyCookie(undefined, 'booksRefreshToken')
  destroyCookie(undefined, 'userData')

  Router.push('/')
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  const signOut = () => {
    destroyCookie(undefined, 'booksToken')
    destroyCookie(undefined, 'booksRefreshToken')
    destroyCookie(undefined, 'userData')

    setUser(undefined)
    Router.push('/')
  }

  useEffect(() => {
    const { booksToken, userData } = parseCookies()

    if (booksToken) {
      const userInfo = JSON.parse(userData)
      setUser(userInfo)
    } else setUser(undefined)
  }, [])

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post<User>('auth/sign-in', {
        email,
        password
      })
      if (!response) throw Error

      setCookie(undefined, 'booksToken', response.headers.authorization, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/'
      })
      setCookie(
        undefined,
        'booksRefreshToken',
        response.headers['refresh-token'],
        {
          maxAge: 60 * 60 * 24 * 30, //30 days
          path: '/'
        }
      )
      setCookie(undefined, 'userData', JSON.stringify(response.data), {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/'
      })
      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.headers.authorization}`
      setUser(response.data)
      Router.push('/home')
    } catch (err) {
      console.log({ err })
    }
  }

  return (
    <AuthContext.Provider
      value={{ signIn, setUser, signOut, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)
  return context
}
