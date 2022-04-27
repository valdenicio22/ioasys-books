import { Story, Meta } from '@storybook/react'

import { TextField, TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    placeholder: 'books@ioasys.com.br'
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />
