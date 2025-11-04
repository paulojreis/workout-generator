import { Card } from '@/components/ui/card'
import { Dumbbell } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="workout-generator-container">
      <div className="workout-generator-content">
        <Card className="workout-generator-card">
          <div className="card-header">
            <div className="card-header-title-row">
              <Dumbbell className="card-header-icon" />
              <h2 className="text-3xl font-semibold tracking-tight">Workout generator</h2>
            </div>
            <p className="text-base text-muted-foreground">
              Choose your split, style, and equipment—we'll build your workout
            </p>
          </div>
          {/* Form content will go here */}
        </Card>
      </div>
    </div>
  )
}

export default App
