import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import logoDisney from "./../assets/images/disney-logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../api/firebase.config";
import { useForm } from 'react-hook-form'
const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const functAutenticacion =async (data) => {
    // alert(data)
    // console.log(data)
    try {
      const registrando = await createUserWithEmailAndPassword(auth, data.email,data.password);
      // Lógica adicional después de registrar
      navigate("/home-movies")
      
    } catch (error) {
      // Manejar errores si createUserWithEmailAndPassword falla
      console.error("Error al registrar el usuario:", error.message);
    }
    
  }

  return (
    <div className='bg-[#090b30] h-screen grid grid-cols-1 '>
      <div className=' border-white grid justify-center content-center justify-items-center gap-4'>
      <Link to={"/"}> <button> <img src={logoDisney} width={150} height={150}  /> </button>   </Link> 
    
    <Card color="white" shadow={false} placeholder={""} className='p-6' >
      <Typography variant="h4" color="blue-gray" placeholder={""}>
        Registrate
      </Typography>
      <Typography color="gray" className="mt-1 font-normal" placeholder={""}>
      ¡Encantado de conocerlo! 
      </Typography>
      <form onSubmit={handleSubmit(functAutenticacion)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
         
          <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={""}>
            Correo Electronico
          </Typography>
          <Input
            crossOrigin={""}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register('email', {
              required: "este campo es obligatorio",
            })}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={""}>
            Contraseña
          </Typography>
          <Input
          crossOrigin={""}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register('password', {
              required: "este campo es obligatorio",
            })}
          />
        </div>
        
       
        <Button type='submit' color='blue' className="mt-6" fullWidth placeholder={""}>
          Registrarse
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal" placeholder={""}>
        ¿Ya tienes una cuenta?
          <Link to={"/login"} className="font-medium text-gray-900"> 
          Iniciar sesión
          </Link> 
        </Typography>
      </form>
    </Card>
      
        
        

      </div>
    </div>
  )
}

export default Register