import { sampleSchema } from '@repo/schemas'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  const sample = sampleSchema.parse({
    name: 'John Doe',
    age: 20,
  })

  return c.json({
    message: 'Hello Hono!',
    sample,
  })
})

export default app
