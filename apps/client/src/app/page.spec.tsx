import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Home from './page'

describe('Home', () => {
  it('should render', ({ expect }) => {
    render(<Home />)
    expect(screen.getByText('Click me')).toBeDefined()
  })
})
