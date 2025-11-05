import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Dumbbell, Check } from 'lucide-react'
import { useState } from 'react'
import './App.css'

function App() {
  const [splitOpen, setSplitOpen] = useState(false)
  const [selectedSplit, setSelectedSplit] = useState<string[]>(['full-body'])
  const [equipmentOpen, setEquipmentOpen] = useState(false)
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>(['any'])
  const [selectedWorkoutType, setSelectedWorkoutType] = useState<string>('hypertrophy')
  const [selectedDuration, setSelectedDuration] = useState<string>('standard')

  const splitTypes = ['full-body', 'upper', 'lower', 'push', 'pull', 'legs']
  const muscleGroups = ['chest', 'back', 'shoulders', 'biceps', 'triceps', 'legs-muscle', 'abs', 'calves']
  const equipmentTypes = ['barbell', 'dumbbells', 'machines', 'cable-machine', 'bodyweight', 'bench', 'pullup-bar', 'dip-bars', 'resistance-bands']

  const handleItemClick = (value: string, e: React.MouseEvent) => {
    e.preventDefault()

    if (splitTypes.includes(value)) {
      // Selecting a split type deselects everything else
      setSelectedSplit([value])
    } else {
      // Selecting a muscle deselects splits but keeps other muscles
      const newSelection = selectedSplit.filter(v => muscleGroups.includes(v))
      if (newSelection.includes(value)) {
        // Deselect if already selected
        const updated = newSelection.filter(v => v !== value)
        setSelectedSplit(updated.length > 0 ? updated : ['full-body']) // Default to full-body if nothing selected
      } else {
        // Add to selection
        setSelectedSplit([...newSelection, value])
      }
    }
  }

  const handleEquipmentClick = (value: string, e: React.MouseEvent) => {
    e.preventDefault()

    if (value === 'any') {
      // Selecting "Any equipment" deselects everything else
      setSelectedEquipment(['any'])
    } else {
      // Selecting specific equipment deselects "any"
      const newSelection = selectedEquipment.filter(v => v !== 'any')
      if (newSelection.includes(value)) {
        // Deselect if already selected
        const updated = newSelection.filter(v => v !== value)
        setSelectedEquipment(updated.length > 0 ? updated : ['any']) // Default to "any" if nothing selected
      } else {
        // Add to selection
        setSelectedEquipment([...newSelection, value])
      }
    }
  }

  const getSplitDisplayValue = () => {
    if (selectedSplit.length === 0) return 'Full body'

    const labels: Record<string, string> = {
      'full-body': 'Full body',
      'upper': 'Upper',
      'lower': 'Lower',
      'push': 'Push',
      'pull': 'Pull',
      'legs': 'Legs',
      'chest': 'Chest',
      'back': 'Back',
      'shoulders': 'Shoulders',
      'biceps': 'Biceps',
      'triceps': 'Triceps',
      'legs-muscle': 'Legs',
      'abs': 'Abs',
      'calves': 'Calves',
    }

    if (selectedSplit.length === 1) {
      return labels[selectedSplit[0]] || selectedSplit[0]
    }

    // Multiple selections - show comma-separated list
    return selectedSplit.map(v => labels[v] || v).join(', ')
  }

  const getEquipmentDisplayValue = () => {
    if (selectedEquipment.length === 0) return 'Any equipment'

    const labels: Record<string, string> = {
      'any': 'Any equipment',
      'barbell': 'Barbell',
      'dumbbells': 'Dumbbells',
      'machines': 'Machines',
      'cable-machine': 'Cable machine',
      'bodyweight': 'Bodyweight',
      'bench': 'Bench',
      'pullup-bar': 'Pull-up bar',
      'dip-bars': 'Dip bars',
      'resistance-bands': 'Resistance bands',
    }

    if (selectedEquipment.length === 1) {
      return labels[selectedEquipment[0]] || selectedEquipment[0]
    }

    // Multiple selections - show comma-separated list
    return selectedEquipment.map(v => labels[v] || v).join(', ')
  }

  return (
    <div className="workout-generator-container">
      <div className="workout-generator-content">
        <Card className="workout-generator-card">
          <div className="card-header">
            <div className="card-header-title-row">
              <Dumbbell className="card-header-icon" />
              <h2>Workout generator</h2>
            </div>
            <p className="text-p-ui" style={{ color: 'var(--content-secondary)' }}>
              Choose your split, style, and equipment—we'll build your workout
            </p>
          </div>

          <div className="workout-form">
            <div className="form-row">
              <span className="text-large form-label">I want a</span>
              <Select open={splitOpen} onOpenChange={setSplitOpen} modal={false}>
                <SelectTrigger className="form-select">
                  <span>{getSplitDisplayValue()}</span>
                </SelectTrigger>
                <SelectContent onPointerDownOutside={() => setSplitOpen(false)} onCloseAutoFocus={(e) => e.preventDefault()}>
                  <SelectGroup>
                    <div onMouseDown={(e) => handleItemClick('full-body', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('full-body') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('full-body') && <span className="w-4" />}
                        Full body
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('upper', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('upper') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('upper') && <span className="w-4" />}
                        Upper
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('lower', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('lower') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('lower') && <span className="w-4" />}
                        Lower
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('push', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('push') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('push') && <span className="w-4" />}
                        Push
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('pull', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('pull') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('pull') && <span className="w-4" />}
                        Pull
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('legs', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('legs') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('legs') && <span className="w-4" />}
                        Legs
                      </span>
                    </div>
                  </SelectGroup>

                  <SelectSeparator className="select-separator" />

                  <SelectGroup>
                    <SelectLabel className="select-label">INDIVIDUAL MUSCLES</SelectLabel>
                    <div onMouseDown={(e) => handleItemClick('chest', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('chest') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('chest') && <span className="w-4" />}
                        Chest
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('back', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('back') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('back') && <span className="w-4" />}
                        Back
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('shoulders', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('shoulders') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('shoulders') && <span className="w-4" />}
                        Shoulders
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('biceps', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('biceps') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('biceps') && <span className="w-4" />}
                        Biceps
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('triceps', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('triceps') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('triceps') && <span className="w-4" />}
                        Triceps
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('legs-muscle', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('legs-muscle') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('legs-muscle') && <span className="w-4" />}
                        Legs
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('abs', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('abs') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('abs') && <span className="w-4" />}
                        Abs
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleItemClick('calves', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedSplit.includes('calves') && <Check className="h-4 w-4" />}
                        {!selectedSplit.includes('calves') && <span className="w-4" />}
                        Calves
                      </span>
                    </div>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="text-large form-label">workout</span>
            </div>

            <div className="form-row">
              <span className="text-large form-label">for</span>
              <Select value={selectedWorkoutType} onValueChange={setSelectedWorkoutType}>
                <SelectTrigger className="form-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="strength">
                    <span className="dropdown-item-content">
                      {selectedWorkoutType === 'strength' && <Check className="h-4 w-4" />}
                      {selectedWorkoutType !== 'strength' && <span className="w-4" />}
                      <span>Strength/Powerlifting</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="hypertrophy">
                    <span className="dropdown-item-content">
                      {selectedWorkoutType === 'hypertrophy' && <Check className="h-4 w-4" />}
                      {selectedWorkoutType !== 'hypertrophy' && <span className="w-4" />}
                      <span>Hypertrophy</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="powerbuilding">
                    <span className="dropdown-item-content">
                      {selectedWorkoutType === 'powerbuilding' && <Check className="h-4 w-4" />}
                      {selectedWorkoutType !== 'powerbuilding' && <span className="w-4" />}
                      <span>Powerbuilding</span>
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="form-row">
              <span className="text-large form-label">lasting for</span>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="form-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="express">
                    <span className="dropdown-item-content">
                      {selectedDuration === 'express' && <Check className="h-4 w-4" />}
                      {selectedDuration !== 'express' && <span className="w-4" />}
                      <span>Express ({'<'}45 minutes)</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="standard">
                    <span className="dropdown-item-content">
                      {selectedDuration === 'standard' && <Check className="h-4 w-4" />}
                      {selectedDuration !== 'standard' && <span className="w-4" />}
                      <span>Standard (45-60 minutes)</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="long">
                    <span className="dropdown-item-content">
                      {selectedDuration === 'long' && <Check className="h-4 w-4" />}
                      {selectedDuration !== 'long' && <span className="w-4" />}
                      <span>Long (60-90 minutes)</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="extended">
                    <span className="dropdown-item-content">
                      {selectedDuration === 'extended' && <Check className="h-4 w-4" />}
                      {selectedDuration !== 'extended' && <span className="w-4" />}
                      <span>Extended (90-120 minutes)</span>
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="form-row">
              <span className="text-large form-label">using</span>
              <Select open={equipmentOpen} onOpenChange={setEquipmentOpen} modal={false}>
                <SelectTrigger className="form-select">
                  <span>{getEquipmentDisplayValue()}</span>
                </SelectTrigger>
                <SelectContent onPointerDownOutside={() => setEquipmentOpen(false)} onCloseAutoFocus={(e) => e.preventDefault()}>
                  <SelectGroup>
                    <div onMouseDown={(e) => handleEquipmentClick('any', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('any') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('any') && <span className="w-4" />}
                        Any equipment
                      </span>
                    </div>
                  </SelectGroup>

                  <SelectSeparator className="select-separator" />

                  <SelectGroup>
                    <div onMouseDown={(e) => handleEquipmentClick('barbell', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('barbell') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('barbell') && <span className="w-4" />}
                        Barbell
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleEquipmentClick('dumbbells', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('dumbbells') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('dumbbells') && <span className="w-4" />}
                        Dumbbells
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleEquipmentClick('machines', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('machines') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('machines') && <span className="w-4" />}
                        Machines
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleEquipmentClick('cable-machine', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('cable-machine') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('cable-machine') && <span className="w-4" />}
                        Cable machine
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleEquipmentClick('bodyweight', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('bodyweight') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('bodyweight') && <span className="w-4" />}
                        Bodyweight
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleEquipmentClick('bench', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('bench') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('bench') && <span className="w-4" />}
                        Bench
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleEquipmentClick('pullup-bar', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('pullup-bar') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('pullup-bar') && <span className="w-4" />}
                        Pull-up bar
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleEquipmentClick('dip-bars', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('dip-bars') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('dip-bars') && <span className="w-4" />}
                        Dip bars
                      </span>
                    </div>
                    <div onMouseDown={(e) => handleEquipmentClick('resistance-bands', e)} className="select-item">
                      <span className="flex items-center gap-2">
                        {selectedEquipment.includes('resistance-bands') && <Check className="h-4 w-4" />}
                        {!selectedEquipment.includes('resistance-bands') && <span className="w-4" />}
                        Resistance bands
                      </span>
                    </div>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <button className="generate-button">
            <Dumbbell className="h-4 w-4" />
            <span className="text-large">Generate my workout</span>
          </button>
        </Card>
      </div>
    </div>
  )
}

export default App
