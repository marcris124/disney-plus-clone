import React, { useEffect } from 'react'
import logo from "./../assets/images/disney-logo.svg"

import pixar from "./../assets/images/pixar-logo.png"
import marvel from "./../assets/images/marvel-logo.png"
import starWars from "./../assets/images/star-wars-logo.png"
import nationalg from "./../assets/images/national-geographic-logo.svg"

import ironMan from "./../assets/images/iron-man.webp"
import elatiGirl from "./../assets/images/elasti-girl.webp"
import moana from "./../assets/images/moana.webp"
import manalorian from "./../assets/images/mandalorian.webp"
import elsa from "./../assets/images/elsa.webp"
import { Button } from '@material-tailwind/react'

import {UserAuth} from "../context/AuthContext"
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const {user,googleSignIn} = UserAuth()
  const iniciarSesion = async()=>{
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(user!= null){
      navigate("/home-movies")
    }
  },[])

  return (
    <main className="w-full h-screen bg-no-repeat bg-app-primary bg-right-top  border-blue-400 grid items-center content-center md:px-8">
    <div className=' border-red-700 grid justify-between grid-cols-1 h-[100vh] lg:grid-cols-2 '>
      <section className=' border-green-800 grid justify-items-center content-center lg:justify-items-start gap-4 p-4'>
        <img src={logo} width={200} height={200}  />

        <h2 className=' border-purple-700 app-h3 app-text'>Las mejores historias del <br /> mundo, en un mismo lugar. </h2>

      
    <div className=' flex flex-col items-center justify-center content-center gap-4 sm:flex-row'>
     
     <Link to={"/register"}> <Button color="blue" size='lg' placeholder={""} className='px-14 xl:px-24'>REGISTRATE AHORA</Button> </Link> 
        <span className='app-h5 app-text'>O</span> 
              <div className=' grid justify-center'>
              
                  <Button
                          placeholder={""}
                        size="lg"
                          variant="outlined"
                          color="blue-gray"
                          className="flex items-center gap-3"
                        onClick={iniciarSesion}
                        >
                          <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                          Continue with Google
                  </Button>


    </div>
        

</div>
        <p className=' border-purple-700 app-gray-3 app-span'>Empieza ahora tu prueba gratis de 7 dias. luego disfruta por 6,99$/mes o 69,99 $/año. Se aplican terminos y condiciones </p>

        <div className=' border-red-900 flex items-center gap-3 flex-wrap justify-center' >

          <img src={logo} width={100} height={100} /> <span className='app-h2'>+</span>
          <img src={pixar} width={100} height={100} /><span className='app-h2'>+</span>
          <img src={marvel} width={100} height={100} /><span className='app-h2'>+</span>
          <img src={starWars} width={100} height={100} /><span className='app-h2'>+</span>
          <img src={nationalg} width={100} height={100} />

        </div>

      </section>
    <section className='skew-x-[-2deg] border-2  border-black hidden lg:flex '>
    <img src={ironMan} width={400} height={200} className='w-0 flex-grow object-cover  duration-300  ease-in  hover: cursor-crosshair  hover:w-[115px] hover:contrast-120 '  />
      <img src={elatiGirl} width={400} height={200} className='w-0 flex-grow object-cover  duration-300  ease-in  hover: cursor-crosshair  hover:w-[115px] hover:contrast-120   '  />

      <img src={moana} width={400} height={200} className='w-0 flex-grow object-cover  duration-300  ease-in  hover: cursor-crosshair  hover:w-[115px] hover:contrast-120  '  />
      <img src={manalorian} width={400} height={200} className='w-0 flex-grow object-cover  duration-300  ease-in  hover: cursor-crosshair  hover:w-[115px] hover:contrast-120  '  />
      <img src={elsa} width={400} height={200} className='w-0 flex-grow object-cover  duration-300  ease-in  hover: cursor-crosshair  hover:w-[115px] hover:contrast-120  '  />
    </section>
    </div>

   </main>
  )
}

export default Home