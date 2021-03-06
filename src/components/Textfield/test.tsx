import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/tests/helpers'

import { TextField } from '.'

describe('<TextField />', () => {
  it('should render the heading', () => {
    renderWithThemeProvider(<TextField />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
