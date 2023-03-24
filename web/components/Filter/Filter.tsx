// Framework and third-party non-ui
import React from 'react'

// App Components
import Icon from '../Icon'

// JSON & Styles
import {
  ApplyButton,
  ClearButton,
  CloseButton,
  Content,
  Divider,
  FilterButton,
  FilterButtonConainer,
  FilterContainer,
  Title,
  TitleContent,
  FilterHeader,
  FilterOption,
  FilterOptionsList,
  Select,
  FilterCount,
} from './Filter-Styled'
import FilterIcon from '../../../public/icons/filter-selected.svg'
import FilterActiveIcon from '../../../public/icons/filter.svg'

// Third-party components (buttons, icons, etc.)

type FilterItem = {
  title: string
  id: string
  isSelected: boolean
}

type FilterValue = {
  type: string
  alias: string
  items: FilterItem[]
}

type FilterProps = {
  filters?: FilterValue[]
  onChange: (filters: FilterValue[]) => void
}

export const Filter: React.FunctionComponent<FilterProps> = ({
  filters,
  onChange,
}) => {
  // State
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [updateFilter, setUpdateFilter] = React.useState<FilterValue[]>(filters)

  const isFilters = filters.find((f) => {
    const isSelected = f.items.find((i) => i.isSelected)
    return isSelected
  })
  const isUpdateFilters = updateFilter.find((f) => {
    const isSelected = f.items.find((i) => i.isSelected)
    return isSelected
  })

  const selectCount = filters
    .map((f) => {
      const count = f.items.filter((i) => i.isSelected)?.length
      return count
    })
    ?.reduce((partialSum, a) => partialSum + a, 0)

  // Actions
  const handleOpenFilters = () => {
    setIsOpen(true)
  }

  const handleClearAll = () => {
    const update = JSON.parse(JSON.stringify(updateFilter))
    const cleared = update.map((f) => {
      const items = f.items.map((i) => {
        return {
          title: i.title,
          id: i.id,
          isSelected: false,
        }
      })
      return { type: f.type, alias: f.alias, items }
    })

    setUpdateFilter(cleared)
    onChange(cleared)
    setIsOpen(false)
  }

  const handleClearAllUpdates = () => {
    const update = JSON.parse(JSON.stringify(updateFilter))
    const cleared = update.map((f) => {
      const items = f.items.map((i) => {
        return {
          title: i.title,
          id: i.id,
          isSelected: false,
        }
      })
      return { type: f.type, alias: f.alias, items }
    })

    setUpdateFilter(cleared)
  }

  const handleClose = () => {
    setUpdateFilter(filters)
    setIsOpen(false)
  }

  const handleApplyFilters = () => {
    onChange(updateFilter)
    setIsOpen(false)
  }

  const handleSelect = React.useCallback(
    (fIdx: number, iIdx: number) => {
      const update = JSON.parse(JSON.stringify(updateFilter))
      update[fIdx].items[iIdx].isSelected = !update[fIdx].items[iIdx].isSelected
      setUpdateFilter(update)
    },
    [updateFilter]
  )

  // Effects

  return (
    <>
      <FilterButtonConainer>
        <FilterButton
          onClick={handleOpenFilters}
          isActive={isOpen || selectCount > 0}
        >
          <Icon
            svg={isOpen || selectCount > 0 ? FilterActiveIcon : FilterIcon}
            alt="filter icon"
            removePadding={true}
          />
          {selectCount > 0 && <FilterCount> {selectCount} </FilterCount>}
        </FilterButton>
        <Divider />
        <ClearButton onClick={handleClearAll} deactivated={!isFilters}>
          {' '}
          Clear all{' '}
        </ClearButton>
      </FilterButtonConainer>
      {isOpen && (
        <FilterContainer className="FilterContainer">
          <Title>
            <ClearButton
              onClick={handleClearAllUpdates}
              deactivated={!isUpdateFilters}
            >
              Clear all
            </ClearButton>
            <TitleContent>Filter</TitleContent>
            <CloseButton onClick={handleClose}> X </CloseButton>
          </Title>
          <Content>
            {updateFilter?.map((f, fIdx) => {
              return (
                <div key={f.type}>
                  <FilterHeader>{f.alias}</FilterHeader>
                  <FilterOptionsList>
                    {f.items?.map((item, iIdx) => (
                      <>
                        <FilterOption key={item.id}>
                          {item.title}
                          <Select
                            type="checkbox"
                            id={item.id}
                            value={item.id}
                            checked={item.isSelected}
                            onChange={() => {
                              handleSelect(fIdx, iIdx)
                            }}
                          />
                        </FilterOption>
                      </>
                    ))}
                  </FilterOptionsList>
                </div>
              )
            })}
            <ApplyButton onClick={handleApplyFilters}> Apply </ApplyButton>
          </Content>
        </FilterContainer>
      )}
    </>
  )
}
