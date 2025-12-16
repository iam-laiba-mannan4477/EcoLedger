import { test, expect } from 'vitest'  // add this line
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

function Example() {
  return <div>Hello, Vitest!</div>
}

test('renders greeting text', () => {
  render(<Example />)
  expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument()
})
