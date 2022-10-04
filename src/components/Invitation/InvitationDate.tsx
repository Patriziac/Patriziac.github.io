import './InvitationDate.css'

export const InvitationDate = () => {
  return (
    <p className='date'>
      <span className='month'>
        Nov
      </span>
      <span className='day'>
        Dom
        <br />
        <span className='number'>20</span>
      </span>
      <span className='year'>
        2022
      </span>
    </p>
  )
}