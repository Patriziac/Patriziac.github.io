import './InvitationContent.css'
import { InvitationDate } from './InvitationDate'
import { InvitationTime } from './InvitationTime'

export const InvitationContent = () => {
  return (
    <div className='invitation-content'>
      <p className='intro'>Te invitamos a celebrar nuestra ceremonia civil</p>
      <h1 className='title'>
        <span>Patty <span>y</span> Jorge</span>
      </h1>
      <InvitationDate />
      <InvitationTime />
    </div>
  )
}