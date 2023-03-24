// Framework and third-party non-ui
import { ReactNode } from 'react'

// App Components

// JSON & Styles
import { CardsContainer } from './Card-Styled'

// Third-party components (buttons, icons, etc.)

type CardListProps = {
  children: ReactNode
}

export const CardList: React.FunctionComponent<CardListProps> = ({
  children,
}) => {
  // State

  // Actions

  // Effects

  return <CardsContainer>{children}</CardsContainer>
}
