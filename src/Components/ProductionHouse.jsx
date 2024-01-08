import React from 'react'
import disney from "./../assets/images/disney.png"
import marvel from "./../assets/images/marvel.png"
import nationalG from "./../assets/images/nationalG.png"
import pixar from "./../assets/images/pixar.png"
import starwars from "./../assets/images/starwar.png"

import disneyV from "./../assets/Videos/disney.mp4"
import starwarsV from "./../assets/Videos/star-wars.mp4"
import marvelV from "./../assets/Videos/marvel.mp4"
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4"
import pixarV from "./../assets/Videos/pixar.mp4"


const ProductionHouse = () => {
    const productionHouseList =[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image: marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwars,
            video:starwarsV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },
       
    ]

  return (
    <div className='flex gap-1 sm:gap-5 p-2 sm:px-16 sm:py-7'>

        {
            productionHouseList.map((item)=>(
                <div key={item.id} className='border-2 border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                    <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>

                    <img src={item.image} alt="" className='w-full' />
                    
                </div>
            ))

        }

    </div>
  )
}

export default ProductionHouse