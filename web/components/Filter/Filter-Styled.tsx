import styled from 'styled-components'

export const FilterButtonConainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 10px 0px;
`

export const Divider = styled.div`
  height: 28px;
  border: 0.5px solid #d7d7d7;
`

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ababab;
  border-radius: 30px;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background-color: #d7d7d7;
  }

  ${({ isActive }) =>
    isActive &&
    `
        color: #FFFFFF;
        background: #424242;
        &:hover {
            background-color: #727272;
        }
    `}
`

export const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #3399ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${({ deactivated }) =>
    deactivated &&
    `
    cursor: auto;
    color: #d7d7d7;
    &:hover {
        text-decoration: none;
      }
    `}

  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #424242;
  text-decoration: none;

  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ApplyButton = styled.button`
  cursor: pointer;
  background: #424242;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  padding: 10px;
`

export const FilterContainer = styled.div`
  width: 300px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`

export const Title = styled.div`
  box-shadow: 0px 4px 4px rgba(162, 162, 162, 0.1);
  display: flex;
  height: 50px;
  align-items: center;
  padding-left: 15px;
`

export const TitleContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  font-weight: 600;
  padding-right: 15px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
`

export const FilterHeader = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #686868;
`

export const FilterOptionsList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px 0px;
`

export const FilterOption = styled.div`
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #424242;
`

export const Select = styled.input`
  margin-left: auto;
  width: 19px;
  height: 19px;
`

export const FilterCount = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding-left: 10px;
`
