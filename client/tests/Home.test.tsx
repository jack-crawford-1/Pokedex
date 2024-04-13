// @vitest-environment jsdom
import { renderRoute } from '../test-setup.tsx'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from '../components/Home.tsx'

test('A main heading renders the word "Pokèdex"', () => {
  render(<Home />)

  // arrange
  const expected = 'Pokèdex'

  // act
  const actual = screen.queryByText(expected, { exact: true })

  console.log(actual)

  // assert
  expect(actual).not.toBeNull()
})
