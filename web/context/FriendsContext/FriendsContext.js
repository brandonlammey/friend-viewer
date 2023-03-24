import * as React from 'react'

import MockData from './MockData.json'

const FriendsContext = React.createContext()

const friendsReducer = (state, action) => {
  switch (action.type) {
    case 'addFriends': {
      return { ...state, friends: action.payload }
    }
    case 'setLoading': {
      return { ...state, loading: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const FriendsContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(friendsReducer, {
    friends: [],
    loading: false,
  })

  const init = () => {
    const setMockData = () => {
      dispatch({ type: 'addFriends', payload: MockData.friends })
      dispatch({ type: 'setLoading', payload: false })
    }
    dispatch({ type: 'setLoading', payload: true })
    setTimeout(setMockData, 10000)
  }

  React.useEffect(() => {
    init()
  }, [])

  const value = { state, dispatch }
  return (
    <FriendsContext.Provider value={value}>{children}</FriendsContext.Provider>
  )
}

export const useFriendsContext = () => {
  const context = React.useContext(FriendsContext)
  if (context === undefined) {
    throw new Error(
      'useFriendsContext must be used within a FriendsContextProvider'
    )
  }
  return context
}
