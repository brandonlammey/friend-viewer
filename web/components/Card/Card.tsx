// Framework and third-party non-ui

import { ReactNode } from 'react'
import { CardChips, CardContainer, CardContent, CardTitle } from './Card-Styled'

// App Components

// JSON & Styles

// Third-party components (buttons, icons, etc.)

type CardProps = {
  title: ReactNode
  chips?: ReactNode
  content: ReactNode
  onSelect?: () => void
}

export const Card: React.FunctionComponent<CardProps> = ({
  title,
  chips,
  content,
  onSelect,
}) => {
  // State
  const isFunction = onSelect instanceof Function

  // Actions
  const handleCardSelection = () => {
    if (isFunction) {
      onSelect()
    }
  }

  // Effects

  return (
    <CardContainer onClick={handleCardSelection} isSelectable={isFunction}>
      <CardTitle>
        {title} <CardChips> {chips} </CardChips>
      </CardTitle>
      <CardContent> {content} </CardContent>
    </CardContainer>
  )
}
