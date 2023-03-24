// Framework and third-party non-ui
import Head from 'next/head'
import React from 'react'

// App Components
import { FriendsPage } from '../web/pages'
import SideNav from '../web/components/SideNav'
import { GlobalStyle, AppWrapper } from './styles/Pages-styled'
import { Inter } from 'next/font/google'

// JSON & Styles
import HomeIcon from '../public/icons/home.svg'
import FriendIcon from '../public/icons/friends.svg'
import Layout from '../web/components/Layout'
import { FriendsContextProvider } from '../web/context'

// Third-party components (buttons, icons, etc.)

const inter = Inter({ subsets: ['latin'] })

const App: React.FunctionComponent = () => {
  // State
  const [page, setPage] = React.useState<string>('friends')

  const options = [
    { icon: HomeIcon, id: 'home', title: 'Home' },
    { icon: FriendIcon, id: 'friends', title: 'Friends' },
  ]

  // Actions
  const handleSelectPage = (id: string) => {
    console.log(id)
    setPage('friends')
  }

  // Effects

  return (
    <div>
      <Head>
        <title>Friend Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <AppWrapper className={inter.className}>
        <SideNav
          options={options}
          selected={page}
          onSelect={handleSelectPage}
        />
        <Layout title={options.find((op) => op.id === page).title}>
          <FriendsContextProvider>
            <FriendsPage />
          </FriendsContextProvider>
        </Layout>
      </AppWrapper>
    </div>
  )
}

export default App
