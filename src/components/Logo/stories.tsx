import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  component: Logo,
  title: 'Logo',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
