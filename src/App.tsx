import './App.css'
import { DecorationsDiamond } from './components/Decorations/DecorationsDiamond'
import { DecorationsLeaves } from './components/Decorations/DecorationsLeaves'
import { InvitationContent } from './components/Invitation/InvitationContent'

function App() {

  return (
    <div className="App">
      <DecorationsLeaves />
      <DecorationsDiamond />
      <InvitationContent />
    </div>
  )
}

export default App
