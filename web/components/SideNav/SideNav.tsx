// Framework and third-party non-ui

// App Components
import Icon from '../Icon'

// JSON & Styles
import {
  Container,
  StyledList,
  StyledListItem,
  StyledTitleContainer,
  StyledTitle,
  StyledH1,
} from './SideNav-styled'

import AppIcon from '../../../public/icons/Clerkie.svg'

// Third-party components (buttons, icons, etc.)

type NavItem = {
  icon?: string
  id: string
  title: string
}

type SideNavProps = {
  options: NavItem[]
  onSelect: (id: string) => void
  selected: string
}

export const SideNav: React.FunctionComponent<SideNavProps> = ({
  options,
  onSelect,
  selected,
}) => {
  // State

  // Actions
  const handleOptionClick = (id: string) => {
    onSelect(id)
  }

  // Effects

  return (
    <Container>
      <StyledTitleContainer>
        <StyledTitle>
          <Icon svg={AppIcon} alt="App Logo" />
          <StyledH1>Clerkie Challenge</StyledH1>
        </StyledTitle>
      </StyledTitleContainer>
      <StyledList>
        {options.map((op) => (
          <StyledListItem
            key={op.id}
            onClick={() => {
              handleOptionClick(op.id)
            }}
            isSelected={selected === op.id}
          >
            <Icon svg={op.icon} alt="item icon" />
            {op.title}
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  )
}
