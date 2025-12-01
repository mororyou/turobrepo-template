import { z } from 'zod'

export const sampleSchema = z.object({
  name: z.string(),
  age: z.number(),
})

export type SampleSchema = z.infer<typeof sampleSchema>
