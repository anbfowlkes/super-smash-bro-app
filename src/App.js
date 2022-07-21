import './App.css';
import Fighter from './components/Fighter.js'
import FighterScreen from './components/FighterScreen.js'
import { useState } from 'react'

function App() {
  const fighters = [
    {name: 'Roy', color: 'blue'}, 
    {name: 'Ganondorf', color: 'brown'}, 
    {name: 'Mario', color: 'lightskyblue'}, 
    {name: 'Luigi', color: 'pink'},
    {name: 'Marth', color: 'dodgerblue'}, 
    {name: 'Link', color: 'gray'}, 
    {name: 'Inkling', color: 'orange'}, 
    {name: 'Samus', color: 'gold'}, 
    {name: 'Fox', color: 'medumseagreen'}, 
    {name: 'Sheik', color: 'coral'}, 
    {name: 'Zelda', color: 'midnightblue'}, 
    {name: 'Ken', color: 'firebrick'}
  ]
    
  const [selectedFighter, setSelectedFighter] = useState()

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {
          fighters.map((element, index) => {
            return (
              <Fighter fighter={element} setSelectedFighter={setSelectedFighter}/>
            )
          })
        }
      </div>
      {
        //conditional render (based on ternary)
        selectedFighter ? 
        <FighterScreen selectedFighter={selectedFighter} /> :
        null
      }
    </div>
  );
}

export default App;

