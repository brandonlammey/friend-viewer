// Framework and third-party non-ui
import { ReactNode } from 'react'

// App Components

// JSON & Styles
import { Container, Content, Title } from './Layout-styled'

// Third-party components (buttons, icons, etc.)

type LayoutProps = {
  title: string
  children?: ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  title,
  children,
}) => {
  // State

  // Actions

  // Effects

  return (
    <Container>
      <Title>{title} </Title>
      <Content>{children}</Content>
    </Container>
  )
}
