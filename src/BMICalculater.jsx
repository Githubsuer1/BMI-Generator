import React from 'react'

const BMICalculater = () => {
    const [weight,setWeight] = React.useState("")
    const [height,setHeight] = React.useState("")
    const [bmi,setBmi] = React.useState("")


    const convert = ()=>{
        if((weight === "") || (height === "")) {
            setBmi('Enter weight height first')
        }
        else{
            let convertedBMI = weight/(height)**2;
            setBmi(convertedBMI)
            setHeight("")
            setWeight("")
        }
       
    }

  return (
    <div className='w-full max-w-md p-4 shadow-2xl bg-white/40 rounded flex flex-col gap-3.5'>
        <div className='w-full'>
            <input 
                type="text" 
                placeholder='Enter your height in meters...' 
                className='p-1.5 sm:p-2.5 rounded w-full outline-none'
                onChange={(e)=>setHeight(e.target.value)}
                value={height}
            />
        </div>

        <div className='w-full'>
            <input 
                type="text" 
                placeholder='Enter your body weight in kg...' 
                className='p-1.5 sm:p-2.5 rounded outline-none w-full'
                onChange={(e)=>setWeight(e.target.value)}
                value={weight}
            />
        </div>

        <div>
            {bmi}
        </div>

        <div className='w-full text-gray-800'>
            <h1 className='font-bold py-2'>BMI Categories</h1>
            <p>Underweight : 18.5</p>
            <p>Normal weight : 18.5 - 24.9</p>
            <p>Overweight : 25 - 24.9</p>
            <p>Obesity : BMI of 30 or greater</p>
        </div>

        <div className='w-full'>
            <button onClick={convert} className='w-full bg-green-400 p-2 rounded'>Convert</button>
        </div>
    </div>
  )
}

export default BMICalculater