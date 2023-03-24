import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import * as React from 'react'

import { Filter } from './Filter'

test('displays a basic card', () => {
  const sampleFilters = [
    {
      type: 'friendLocation',
      alias: 'Friend Address',
      items: [
        { title: 'Baltimore', id: 'Baltimore', isSelected: false },
        {
          title: 'Denver',
          id: 'Denver',
          isSelected: false,
        },
      ],
    },
  ]

  render(
    <Filter
      filters={sampleFilters}
      onChange={() => {
        return
      }}
    />
  )

  expect(screen.queryByText('Clear all')).toBeInTheDocument()
  expect(screen.queryByAltText('filter icon')).toBeInTheDocument()
})
