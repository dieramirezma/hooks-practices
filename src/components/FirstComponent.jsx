import { useState } from 'react'

export const FirstComponent = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h3>El número del contador es {counter}</h3>
      <button className='button-large' type='submit' onClick={() => setCounter(counter + 1)}>Sumar Contador</button>
    </div>
  )
}
