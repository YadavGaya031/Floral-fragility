import React from 'react'

const Bottom = () => {
  return (
    <div className='w-full mt-[20vw] flex justify-between items-start pb-[10vw] px-[10vw] font-[font]'>
        <div id="part1" className='w-1/2'>

        </div>
        <div id="part2" className='w-[40%] h-[30vw] text-[80px] leading-none font-[font]'>
            <h1>Blue Pottery <br /> Decorative <br />Vase</h1>
            <div id="btn" className='flex justify-between items-center mt-[90px] px-[20px]'>
                <button className='text-[14px] py-[8px] px-[15px] rounded-full border-2 bg-transparent'>Add to cart</button>
                <h2 className='text-[65px]'>$57</h2>
            </div>
        </div>
    </div>
  )
}

export default Bottom