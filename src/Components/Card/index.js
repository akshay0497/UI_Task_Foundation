import React from 'react'

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import img1 from '../../Asset/Images/Card/001-airplane.jpg'
import img2 from '../../Asset/Images/Card/002-cargo-ship.jpg'
import img3 from '../../Asset/Images/Card/003-truck.jpg'

import './index.css'

const Card = () => {
  return (
    <div id='card' className='flex items-center justify-center gap-2 my-10 font-sans px-10'>
      <div className='flex border gap-3 w-96 bg-white rounded p-2'>
        <div className='py-5 w-96 '>
            <img src={img1}/>
        </div>
        <div className=''>
            <h1 className='font-bold'>Air Freight</h1>
            <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='font-bold text-[#081158] text-xs'>READ MORE <ArrowForwardRoundedIcon className='bg-[#081158] rounded text-white ml-5'/></button>
        </div>
      </div>
      <div className='flex border gap-3 w-96 bg-white rounded p-2'>
        <div className='py-5 w-96 '>
            <img src={img2}/>
        </div>
        <div className=''>
            <h1 className='font-bold'>Sea Freight</h1>
            <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='font-bold text-[#081158] text-xs'>READ MORE <ArrowForwardRoundedIcon className='bg-[#081158] rounded text-white ml-5'/></button>
        </div>
      </div>
      <div className='flex border gap-3 w-96 bg-white rounded p-2'>
        <div className='py-5 w-96 '>
            <img src={img3}/>
        </div>
        <div className=''>
            <h1 className='font-bold'>Land Freight</h1>
            <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='font-bold text-[#081158] text-xs'>READ MORE <ArrowForwardRoundedIcon className='bg-[#081158] rounded text-white ml-5'/></button>
        </div>
      </div>
    </div>
  )
}

export default Card
