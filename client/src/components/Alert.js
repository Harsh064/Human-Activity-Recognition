import React from 'react';
import normalIcon from '../assets/normalAlert.png';
import dangerIcon from '../assets/danger.png';
import successIcon from '../assets/success.png';
import warningIcon from '../assets/warning.png'

export default function Alert({ alert }) {
  const style = {
    danger: 'bg-red-400',
    success: 'bg-green-400',
    warning: 'bg-yellow-400',
    normal: 'bg-blue-400'
  }

  const images = {
    danger: dangerIcon,
    success: successIcon,
    warning: warningIcon,
    normal: normalIcon
  }

  return (
    alert.visibility ?
    <div className={`flex items-center fixed top-44 w-full px-5 py-1 ${style[alert.status]} text-white`}>
      <img src={images[alert.status]} alt="" className='w-8' />
      <p className='px-4'>{ alert.message }</p>
    </div> : null
  )
}
