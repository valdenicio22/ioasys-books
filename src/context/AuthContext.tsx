import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
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
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError: Dispatch<any>
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
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>()
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
    setIsLoading(true)
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log({ err })
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        setUser,
        signOut,
        isAuthenticated,
        user,
        error,
        setError,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)
  return context
}
