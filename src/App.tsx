import { useEffect } from 'react'
import './App.css'
import { DecorationsDiamond } from './components/Decorations/DecorationsDiamond'
import { DecorationsLeaves } from './components/Decorations/DecorationsLeaves'
import { InvitationContent } from './components/Invitation/InvitationContent'
import { InvitationContentInfo } from './components/Invitation/InvitationContentInfo'

function App() {

  const changePageEffect = () => {
    const pages = ['page1', 'page2']

    pages.forEach((item) => {
      let page = document.getElementById(item);

      if (page?.classList.contains('active')) {
        page?.classList.add('fade-out');
        page?.classList.remove('fade-in');
        page?.classList.remove('active');
      }
      else {
        page?.classList.remove('fade-out');
        page?.classList.add('fade-in');
        page?.classList.add('active');
      }
    });
  }

  useEffect(() => {
    const changePage = setInterval(changePageEffect, 10000);

    return () => {
      clearInterval(changePage);
      console.log('Unmounted');
    };
  }, []);

  return (
    <div className="App">
      <div id='page1' className='page page-1 active' >
        <DecorationsLeaves inverted={false} />
        <DecorationsDiamond />
        <InvitationContent />
      </div>

      <div id='page2' className='page page-2'>
        <DecorationsLeaves inverted={true} />
        <InvitationContentInfo />
      </div>
    </div>
  )
}

export default App
