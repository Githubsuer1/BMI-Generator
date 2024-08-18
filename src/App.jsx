import { useState } from 'react'
import BMICalculater from './BMICalculater'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='w-full h-screen'>
        <h1 className='bg-gray-500 text-center font-bold text-lg sm:text-2xl p-1.5'>BMI Calculater</h1>
        <div className='w-full h-screen bg-gray-800 flex justify-center p-8'>
          <div className='w-full max-w-md'>
            <BMICalculater />
          </div>
        </div>
      </div>
  )
}

export default App
