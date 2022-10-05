import { FC } from 'react'
import './Decorations.css'

interface Orientation {
  inverted: boolean
}

export const DecorationsLeaves: FC<Orientation> = ({ inverted }) => {
  return (
    <div className={`leaves-corners ${inverted ? 'inverted' : ''}`}>
      <div className='leaves leaves-left'></div>
      <div className='leaves leaves-right'></div>
    </div>
  )
}