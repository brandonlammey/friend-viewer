// Framework and third-party non-ui
import { ReactNode } from 'react'

// App Components

// JSON & Styles
import { StyledLoaderWrapper } from './Loader-styled'

// Third-party components (buttons, icons, etc.)

type LoaderContainerProps = {
  children: ReactNode
}

export const LoaderContainer: React.FunctionComponent<LoaderContainerProps> = ({
  children,
}) => {
  // State and Constants

  // Actions

  //Effects

  return <StyledLoaderWrapper>{children}</StyledLoaderWrapper>
}
