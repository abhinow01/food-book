import React from 'react'

const Banner = () => {
  return (
    <div className='flex items-center justify-center '>
    <div className='flex w-4/5 h-4/5 flex-col justify-between items-center border border-b rounded-xl bg-[url("https://kitchenofdebjani.com/wp-content/uploads/2020/12/Nalli-Nihari-recipe.jpg")]  '>
        <div className='text-6xl text-bold  text-bold capitalize flex flex-col justify-center p-4 '>
            <div><h1 className='font-Founders_Grotesk_X-Condensed font-bold  p-4 text-white '>UNLEASH CULINARY</h1> </div>
            <div className='flex justify-center items-center'><h1 className='font-Founders_Grotesk_X-Condensed font-bold  p-4 text-white '>EXCELLENCE</h1> </div>

        </div>
        <div className=' text-bold text-lg  p-4 '>
            <h3 className='font-Founders_Grotesk_X-Condensed font-thin capitalize text-white p-4 '>explore a world of flavours , discover <br/> handcrafted recipies , and let the aroma of <br/> our passion for cooking fill your kitechen
            </h3>
        </div>
        <div>
            <button className='bg-white rounded-lg p-2 m-4 mb-4 '>explore now </button>
        </div>

    </div>
    </div>
  )
}

export default Banner