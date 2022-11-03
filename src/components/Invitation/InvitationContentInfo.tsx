import './InvitationContent.css'
import { InvitationDate } from './InvitationDate'
import { InvitationTime } from './InvitationTime'

export const InvitationContentInfo = () => {
  return (
    <div className='invitation-content info'>

      <div className='invitation-section'>
        <p>
          Nos encantaría compartir con ustedes este día tan importante en nuestras vidas.
        </p>
      </div>

      <div className='invitation-section'>
        <h2 className='title'>
          <span>Etiqueta</span>
          <div className='line'></div>
        </h2>
        <p className='invitation-etiquette '>
          <span>Semi formal</span>
          <span>Para 2 adultos</span>
        </p>
      </div>

      <div className='invitation-section'>
        <h2 className='title'>
          <span>Dirección</span>
          <div className='line'></div>
        </h2>
        <p>
          Lafayette 2710, Los Faisanes Sector Platino, 67169 Guadalupe, N.L.
        </p>
        <a href="https://g.page/losfaisanesplatino?share" target='_blank' className='invitation-link'>
          Ver mapa
        </a>
      </div>

      <br />

      <div className='invitation-section'>
        <p>Atte.</p>
        <h3 className='title atte'>
          <span>Patty y Jorge</span>
        </h3>
      </div>

    </div>
  )
}