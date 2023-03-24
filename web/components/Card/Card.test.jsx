import { render, screen } from '@testing-library/react'
import { Card } from './Card'
import '@testing-library/jest-dom'

test('displays a basic card', () => {
  const sample = {
    title: 'Sample Name',
    chips: null,
    content: 'sample@email.com',
  }

  render(<Card title={sample.title} content={sample.content} />)

  expect(screen.queryByText(sample.title)).toBeInTheDocument()
})
