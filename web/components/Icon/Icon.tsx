// Framework and third-party non-ui

// App Components

// JSON & Styles
import { StyledIcon } from './Icon-styled'

// Third-party components (buttons, icons, etc.)

type IconProps = {
  svg: string
  alt: string
  removePadding?: boolean
}

export const Icon: React.FunctionComponent<IconProps> = ({
  svg,
  alt,
  removePadding,
}) => {
  // State

  // Actions

  // Effects

  return <StyledIcon src={svg} alt={alt} removePadding={removePadding} />
}
