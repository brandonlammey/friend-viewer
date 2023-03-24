import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  background: #091928;
  color: #ffffff;
  flex-flow: column;
  align-items: center;
`

export const StyledTitleContainer = styled.div`
  width: 100%;
  padding: 25px 0px;
`

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 30px;
`

export const StyledH1 = styled.h1`
  font-weight: 400;
  font-size: 1em;
  margin: 0;
`

export const StyledList = styled.div`
  width: 220px;
  padding: 0px 15px;
  gap: 10px;
  display: flex;
  flex-flow: column;
`

export const StyledListItem = styled.div`
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  border: 0px;
  background: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  &:hover {
    background-color: #424242;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
  background: #424242;
`}
`

export const StyledIcon = styled.div``
