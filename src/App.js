import React from 'react'
import boxes from './boxes.js'
import Box from './box.js'

export default function App() {
  const [box, setbox] = React.useState(boxes) 
  function toggle(id){
    setbox(prevsquares => {
      return prevsquares.map(square =>{
        return id===square.id ? {...square, on: !square.on}: square;
      })
    })
  }
  const square = box.map(first => (
      <Box
          on={first.on}
          key={first.id}
          id={first.id}
          clicked={toggle}
       /> ))

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    <div className="App">
      {square}
    </div>
  )
}