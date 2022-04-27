import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithThemeProvider(<Logo />)
    expect(screen.getByLabelText(/Ioasys/i).parentElement).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithThemeProvider(<Logo color="black" />)
    expect(screen.getByLabelText(/Ioasys/i).parentElement).toHaveStyle({
      color: '#333333'
    })
  })
})
