import React from 'react'

function Card1({ img, b1, b2, b3, h1, span, p, sp, p1, p2, bend }) {
  return (
    <>
      {/* d1 */}
      <div className='w-[335px] shadow-md px-[30px] py-[25px]'>
        <div className='flex items-center flex-wrap gap-[10px]'>
          <button className='px-[15px] py-[2px] bg-[#E7E7E8] rounded-[2px]'>{b1}</button>
          <button className='px-[15px] py-[2px] bg-[#E7E7E8] rounded-[2px]'>{b2}</button>
          <button className='px-[15px] py-[2px] bg-[#E7E7E8] rounded-[2px]'>{b3}</button>
        </div>
        <img src={img} className="py-[32px]" />
        <div className='py-[32px]'>
          <h1 className='text-[40px] flex flex-col items-start font-[700]'>{h1} <span className='text-[#BF3535]'>{span}</span></h1>
        </div>

        <div className='flex flex-col gap-[25px]'>
          <div className='flex flex-col gap-[20px]'>
            <p className='flex flex-col gap-[5px]'>{p} <span className='font-[700] text-[20px]'>{sp}</span></p>
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
          <button className='border-[#BF3535] rounded-[5px] w-full py-[10px] border-[1px] px-[25px]'>{bend}</button>
        </div>
      </div>
    </>
  )
}

export default Card1
