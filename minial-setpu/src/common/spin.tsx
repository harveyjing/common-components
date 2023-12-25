import React from 'react'
import spin from '../images/spin.svg'

export default function Spin() {
  return (
    <div className='animate-spin w-10 h-10'>
        <img src={spin} width={40} height={40} alt=''/>
    </div>
  )
}
