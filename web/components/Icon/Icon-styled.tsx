import styled from 'styled-components'

import Image from 'next/image'

export const StyledIcon = styled(Image)`
  padding-right: 10px;

  ${({ removePadding }) =>
    removePadding &&
    `
    padding-right: 0;
`}
`
