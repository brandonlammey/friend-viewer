import styled from 'styled-components'

export const CardContainer = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  padding: 25px;
  ${({ isSelectable }) =>
    isSelectable &&
    `
    cursor: pointer
`}
`

export const CardTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`

export const CardChips = styled.div`
  font-weight: 400;
  font-size: 12px;
  padding-left: 10px;
`

export const CardContent = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #ababab;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  overflow: auto;
  white-space: nowrap;
  height: 90%;
`

export const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 7px;
  gap: 10px;
  border-radius: 21px;
  background: #dcffe6;
  color: #19b444;

  ${({ type }) =>
    `
        background: ${type.background};
        color: ${type.text};
    `}
`
