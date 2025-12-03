import { describe, expect, it } from 'vitest'
import app from './index'

describe('GET /', () => {
  it('should return message and sample data', async () => {
    const res = await app.request('/')

    expect(res.status).toBe(200)

    const json = await res.json()

    expect(json).toEqual({
      message: 'Hello Hono!',
      sample: {
        name: 'John Doe',
        age: 20,
      },
    })
  })

  it('should return correct content-type', async () => {
    const res = await app.request('/')

    expect(res.headers.get('content-type')).toContain('application/json')
  })
})
