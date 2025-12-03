import { describe, it } from 'vitest'
import { sampleSchema } from './sample.js'

describe('sampleSchema', () => {
  it('should parse a valid object', ({ expect }) => {
    const result = sampleSchema.parse({
      name: 'John Doe',
      age: 20,
    })
    expect(result).toEqual({
      name: 'John Doe',
      age: 20,
    })
  })

  it('should throw an error for an invalid object', ({ expect }) => {
    expect(() =>
      sampleSchema.parse({
        name: 'John Doe',
        age: 'twenty',
      }),
    ).toThrow()
  })

  it('should throw an error for a missing required field', ({ expect }) => {
    expect(() =>
      sampleSchema.parse({
        age: 20,
      }),
    ).toThrow()
  })
})
