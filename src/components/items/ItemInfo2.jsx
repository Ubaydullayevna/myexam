import React from 'react'
import { Button1 } from '../buttons/Button'

const ItemInfo2 = ({title, img}) => {
  return (
    <div>
    <div className=" w-[1110px] flex justify-between items-center mx-auto my-36">
      
      <div className="w-[50%]">
        <p className="text-[40px]">NEW PRODUCT</p>
        <p className="text-[15px]">
          The new XX99 Mark II headphones is the pinnacle of pristine audio.
          It redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
       <Button1/>
              </div>
              <div className="w-[40%] bg-slate-200 ">
        <img className='mx-auto'  src={img} alt="" />
      </div>
    </div>
  </div>
  )
}

export default ItemInfo2