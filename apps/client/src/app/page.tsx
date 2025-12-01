import { sampleSchema } from '@repo/schemas'
import { Button } from '@repo/ui/components/button'

export default function Home() {
  const sample = sampleSchema.parse({
    name: 'John Doe',
    age: 20,
  })

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <Button>Click me</Button>
      <pre>{JSON.stringify(sample, null, 2)}</pre>
    </div>
  )
}
