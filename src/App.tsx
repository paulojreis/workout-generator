import { useState } from 'react'
import { Button } from '@/components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="max-w-2xl mx-auto p-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Paulo testing</h1>
          <p className="text-xl text-muted-foreground">
            React App with ShadCN UI
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-4">
            <Button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </Button>
            <Button variant="outline" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>

          <div className="flex gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>Built with Vite, React, TypeScript, Tailwind CSS, and ShadCN UI</p>
        </div>
      </div>
    </div>
  )
}

export default App
