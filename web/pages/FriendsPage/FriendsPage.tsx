/* eslint-disable @typescript-eslint/ban-ts-comment */
// Framework and third-party non-ui
import React from 'react'

// App Components
import Card, { CardList, Chip } from '../../components/Card'
import Filter from '../../components/Filter'
import Loader, { LoaderContainer } from '../../components/Loader'
import { useFriendsContext } from '../../context/FriendsContext/FriendsContext'

// JSON & Styles

import { ContentContainer, PageContainer } from './FriendsPage-styled'

// Third-party components (buttons, icons, etc.)
// type Friend = {
//   id: number
//   fName: string
//   lName: string
//   email: string
//   phone: string
//   friendType?: 'Super Close Friends' | 'Close Friends'
// }

export const FriendsPage: React.FunctionComponent = () => {
  // State
  const FriendsContext = useFriendsContext()

  const friends = FriendsContext.state.friends

  const fType = {
    'Super Close Friends': 'green',
    'Close Friends': 'blue',
  }

  const sampleFilters = [
    {
      type: 'friendType',
      alias: 'Friend Status',
      items: [
        { title: 'Close Friends', id: 'Close Friends', isSelected: false },
        {
          title: 'Super Close Friends',
          id: 'Super Close Friends',
          isSelected: false,
        },
      ],
    },
  ]

  const [filters, setFilters] = React.useState(sampleFilters)

  const [filteredFriends, setFilteredFriends] = React.useState(friends)

  // Actions
  const handleUpdateFilters = (updates) => {
    setFilters(updates)
  }

  // Effects
  React.useEffect(() => {
    const isFilters = filters.find((f) => {
      const isSelected = f.items.find((i) => i.isSelected)
      return isSelected
    })

    if (!isFilters) {
      setFilteredFriends(friends)
      return
    }

    const filtered = friends.filter((friend) => {
      const validFilters = filters.map((f) => {
        const show = f.items.find(
          (item) => item.id === friend[f.type]
        )?.isSelected
        return show
      })
      return validFilters.includes(true)
    })

    setFilteredFriends(filtered)
  }, [filters, friends])

  return (
    <PageContainer>
      <ContentContainer>
        {FriendsContext.state.loading && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}

        {!FriendsContext.state.loading && (
          <>
            <Filter filters={filters} onChange={handleUpdateFilters} />
            <CardList>
              {filteredFriends.map((f) => {
                // @ts-ignore
                const type: 'green' | 'blue' | null = f.friendType
                  ? fType[f.friendType]
                  : null
                const chip =
                  f.friendType?.length > 0 ? (
                    <Chip title={f.friendType} status={type} />
                  ) : null
                return (
                  <Card
                    key={f.id}
                    title={`${f.fName} ${f.lName}`}
                    chips={chip}
                    content={<div>{`${f.email} · ${f.phone}`}</div>}
                  />
                )
              })}
            </CardList>
          </>
        )}
      </ContentContainer>
    </PageContainer>
  )
}
