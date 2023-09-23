import { useState } from 'react'
import InputValue from './components/InputValue'
import Integers from './components/Integers'
import CalculateSybols from './components/CalculateSymbols'

import './styles/app.scss'

function App() {
  const [dataChange, setDataChange] = useState('')

  return (
    <div className="app">
      <h1 className='app__title'>Cool calculator 😊</h1>
      <div className="app__content">
        <InputValue
          dataChange={dataChange}
          setDataNumber={setDataChange}
        />
        <div className="app__wrapp">
          <Integers setDataNumber={setDataChange} dataChange={dataChange} />
          <CalculateSybols dataChange={dataChange} setDataSymbol={setDataChange} />
        </div>
      </div>
    </div>
  )
}

export default App
