import { useEffect } from 'react'
import './App.css'
import { DecorationsDiamond } from './components/Decorations/DecorationsDiamond'
import { DecorationsLeaves } from './components/Decorations/DecorationsLeaves'
import { InvitationContent } from './components/Invitation/InvitationContent'

function App() {

  const showPage1Handler = () => {
    let page: any = document.querySelector('.page-1');
    page.classList.add('fade-out');
  }

  const showPage2Handler = () => {
    let page: any = document.querySelector('.page-2');
    page.classList.add('fade-in');
  }

  useEffect(() => {
    //const showPage1 = setTimeout(showPage1Handler, 5000);
    ///const showPage2 = setTimeout(showPage2Handler, 15000);
  }, []);

  return (
    <div className="App">
      <div className='page page-1'>
        <DecorationsLeaves />
        <DecorationsDiamond />
        <InvitationContent />
      </div>
    </div>
  )
}

export default App
