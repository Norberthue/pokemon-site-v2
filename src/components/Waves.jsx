import React from 'react'
import Wave from 'react-wavify'
export default function Waves() {
  return (
    <div>
      <Wave className=''
      fill='#060b28'
      paused={false}
      options={{
        height:60,
        amplitude: 40,
        speed: 0.20,
        points: 6,
      }}
    ></Wave>
    <Wave className='-mt-35 opacity-50'
      fill='#060b28'
      paused={false}
      options={{
        height: 20,
        amplitude: 40,
        speed: 0.25,
        points: 5,
      }}
    ></Wave>
    <Wave className='-mt-65 opacity-70'
      fill='#060b28'
      paused={false}
      options={{
        height: 10,
        amplitude: 40,
        speed: 0.30,
        points: 3,
      }}
    ></Wave>
    
    </div>
      

    
    
    
    
  )
}
