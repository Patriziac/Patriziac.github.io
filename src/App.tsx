import { useState } from 'react'
import rings from './assets/wedding-rings.png'
import { Calendar } from './components/Calendar'
import './App.css'

function App() {

    return (
        <div className="App">
            <h1 className='title'>Patty y Jorge</h1>
            <Calendar />
        </div>
    )
}

export default App
