// Framework and third-party non-ui

// App Components

// JSON & Styles
import { StyledContainer, StyledLoadElement } from './Loader-styled'

// Third-party components (buttons, icons, etc.)

export const Loader: React.FunctionComponent = () => {
  // State and Constants
  const spinTransition = {
    repeat: Infinity,
    ease: 'anticipate',
    duration: 1,
  }
  // Actions

  //Effects

  return (
    <StyledContainer>
      <StyledLoadElement
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </StyledContainer>
  )
}
