import React from 'react'
import '../styles/styles.css'
import  '../assets/scss/index.scss'

function Register() {
  return (

      <div class="main__wrapper">
         <section class="py-12 bg-blueGray-50">
            <div class="container px-4 mx-auto">
               <div class="flex max-w-md mx-auto flex-col text-center">
                     <div class="mt-12 mb-8 p-8 bg-white rounded shadow">
                        <h4 class="mb-6 text-3xl">Crear cuenta en SkyBit</h4>
                        <div class="flex mb-4 px-4 bg-blueGray-50 rounded border">
                           <input class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="email" placeholder="Username" />
                           <svg class="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                           </svg>
                        </div>
                        <div class="flex mb-4 px-4 bg-blueGray-50 rounded border">
                           <input class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="email" placeholder="Email" />
                           <svg class="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                           </svg>
                        </div>
                        <div class="flex mb-6 px-4 bg-blueGray-50 rounded border">
                           <input class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="password" placeholder="Enter your password" />
                           <button class="ml-4">
                                 <svg class="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                 </svg>
                           </button>
                        </div>
                        <div class="flex flex-wrap -mx-3">
                           <div class="flex mb-6 px-4 bg-blueGray-50 rounded border">
                                 <input class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="password" placeholder="Confirm password" />
                                 <button class="ml-4">
                                    <svg class="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                 </button>
                           </div>
                        </div>

                        <div class="float-left mb-8 wow animate__ animate__fadeIn animated animated" data-wow-delay=".1s" >
                           <label class="inline-flex text-xs">
                                 <input type="checkbox" class="form-checkbox" checked="" />
                                 <span class="ml-2">Estoy de acuerdo con las <a class="underline hover:text-blueGray-500" href="#">Politicas de privacidad</a> y <a class="underline hover:text-blueGray-500" href="#">Terminos de condiciones</a></span>
                           </label>
                        </div>

                        <button class="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded">Sign Up Now</button>
                        <p class="my-6 text-xs text-blueGray-400 text-center font-semibold">or continue with</p>
                        <button class="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded" href="#">
                           <img class="h-6 pr-10" src="http://wp.alithemes.com/html/monst/assets/imgs/logos/facebook-sign.svg" />
                           <span>Ingresar con  Facebook</span>
                        </button>
                        <button class="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded" href="#">
                           <img class="h-6 pr-10" src="http://wp.alithemes.com/html/monst/assets/imgs/logos/google-sign.svg" />
                           <span>Ingresar con Google</span>
                        </button>

                        <div class="w-full mt-12 mx-auto text-center">
                           <p>
                                Ya tienes cuenta?
                                 <a
                                    class="inline-block text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none wow animate__ animate__fadeIn animated animated"
                                    data-wow-delay=".1s"
                                    href="login.html"
                      
                                 >
                                    Ingresa ahora
                                 </a>
                           </p>
                        </div>
                     </div>
                     <div>
                        <p class="text-xs text-blueGray-400 text-center"><a class="underline hover:text-blueGray-500" href="#">Police privacy</a> and <a class="underline hover:text-bluegray-500" href="#">Terms of Use</a></p>
                     </div>
               </div>
            </div>
         </section>


      </div>

  )
}

export default Register
