import { useState } from 'react'

export const SecondComponent = () => {
  const [name, setName] = useState('Inés María')

  const [isNameChanged, setisNameChanged] = useState(false)

  const changeName = (e) => {
    if (isNameChanged) {
      setName('Inés María')
    } else {
      setName('Pedro Oliveros')
    }
    setisNameChanged(!isNameChanged)
  }

  return (
    <div>
      <h3>Componente: SecondComponent</h3>
      <p>{name}</p>
      <div>
        <button className='button-large' onClick={changeName}>Cambiar nombre</button>
      </div>
    </div>
  )
}
