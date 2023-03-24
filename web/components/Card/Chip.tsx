// Framework and third-party non-ui

// App Components

// JSON & Styles
import { ChipContainer } from './Card-Styled'

// Third-party components (buttons, icons, etc.)

type ChipProps = {
  title: string
  status?: 'blue' | 'green'
}

export const Chip: React.FunctionComponent<ChipProps> = ({ title, status }) => {
  // State
  const types = {
    blue: {
      background: '#DFEFFF',
      text: '#3399FF',
    },
    green: { background: '#DCFFE6', text: '#19B444' },
    default: { background: '#DFEFFF', text: '#3399FF' },
  }

  // Actions

  // Effects

  return (
    <ChipContainer type={status ? types[status] : types.default}>
      {title}
    </ChipContainer>
  )
}
