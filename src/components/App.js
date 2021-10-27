import React from 'react'
import '../styles/styles.css'
import  '../assets/scss/index.scss'
import logo from '../assets/img/logo.svg'
// Blanco, oro, negro
// Skibit Global
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import avatar from '../assets/img/avatar-300x300.jpg'
import svgLogo from '../assets/img/undraw_transfer_money_rywa.svg'
function App() {
  return (

      <div class="main__wrapper">
        <div class="fixed w-full top-0 z-50 bg-white">
          <div class=" z-50 relative bg-white">
            <div class="flex items-center border-b h-16 z-50 relative bg-white">
              <div class=" h-full flex items-center w-56 border-r">
                <div class="text-base text-gray-900 font-extrabold ml-7">
                  Skibit <strong class="text-emerald-500">global</strong>
                </div>
              </div>
              <div class=" ml-auto flex items-center h-full">
                <div class="border-r  px-6 h-full flex items-center">
                  <div class="flex items-center">
                    <div class="">
                      <img class="w-6" src={avatar} />
                    </div> 
                    <div class="ml-5 text-sm text-emerald-500 font-medium">
                      Nombre 
                    </div>
                  </div>
                </div>
                <div class="  px-6  border-r h-full flex items-center">
                 <svg class="w-7 h-7 text-gray-500 fill-current cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Analytics</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 280l88-88M232 216l64 64M80 320l104-104"/><circle cx="456" cy="168" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="320" cy="304" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="208" cy="192" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="56" cy="344" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                </div>
                <div class=" px-6 h-full flex items-center">
                  <svg  class="w-7 h-7 text-gray-500 fill-current cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Settings</title><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" pt-12 flex">
          <div class="w-56 border-r absolute h-screen">
          
            <ul class="items__main mt-6">
              <li class="py-3.5 px-9  group hover:bg-emerald-500 hover:bg-opacity-25 cursor">
                <a href="" class="flex items-center ">
                  <svg class="w-7 h-7 mr-6 text-gray-500 fill-current group-hover:text-emerald-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>
                  <span class=" text-sm text-gray-500 group-hover:text-emerald-500 ">Dashboard</span>
                </a>
              </li>

              <li class="py-3.5 px-9  group hover:bg-emerald-500 hover:bg-opacity-25 cursor">
                <a href="" class="flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-emerald-500 w-7 h-7 mr-6 text-gray-500 fill-current" viewBox="0 0 512 512"><title>Leaf</title><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                  <span class=" text-sm text-gray-500 group-hover:text-emerald-500">Plan</span>
                </a>
              </li>


              <li class="py-3.5 px-9 group hover:bg-emerald-500 hover:bg-opacity-25 cursor">
                <a href="" class="flex items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 mr-6 group-hover:text-emerald-500 text-gray-500 fill-current" viewBox="0 0 512 512"><title>Cash</title><rect x="32" y="80" width="448" height="256" rx="16" ry="16" transform="rotate(180 256 208)" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 384h384M96 432h320"/><circle cx="256" cy="208" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                  <span class=" text-sm text-gray-500 group-hover:text-emerald-500">Balance</span>
                </a>
              </li>


              <li class="py-3.5 px-9  group hover:bg-emerald-500 hover:bg-opacity-25 cursor">
                <a href="" class="flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-emerald-500 w-7 h-7 mr-6 text-gray-500 fill-current" viewBox="0 0 512 512"><title>People</title><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
                  <span class=" text-sm text-gray-500 group-hover:text-emerald-500">Rewards</span>
                </a>
              </li>


              <li class="py-3.5 px-9  group hover:bg-emerald-500 hover:bg-opacity-25 cursor">
                <Link to="/my-referral" class="flex items-center ">
                  <svg class="w-7 h-7 mr-6 text-gray-500 fill-current group-hover:text-emerald-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>
                  <span class=" text-sm text-gray-500 group-hover:text-emerald-500">My Referral</span>
                </Link>
              </li>

              <li class="py-3.5 px-9  group hover:bg-emerald-500 hover:bg-opacity-25 cursor">
                <a href="" class="flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7  group-hover:text-emerald-500 mr-6 text-gray-500 fill-current" viewBox="0 0 512 512"><title>Link</title><path d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36"/></svg>
                  <span data-metro="3.3 + 26 + 2.75 + 2.74 - 6" class=" text-sm text-gray-500 group-hover:text-emerald-500">Refer Link</span>
                </a>
              </li>
 
            </ul>

          </div>
          <div class="  ml-56 w-full">
            {/*<div class="  w-full absolute h-64 bg-emerald-500 bg-opacity-80">
              <div class="px-6 py-4 h-full flex flex-col">
                <nav class="bg-grey-light rounded font-sans w-full">
                  <ol class="list-reset flex text-grey-dark">
                    <li><a href="#" class=" text-white text-sm">Home</a></li>
                    <li><span class="mx-2 text-white text-sm">/</span></li>
                    <li><a href="#" class=" text-white text-sm">Library</a></li>
                    <li><span class="mx-2 text-white text-sm">/</span></li>
                    <li class="text-white text-sm flex items-center">Data</li>
                  </ol>
                </nav>
                <div class="mt-auto pb-7 text-white text-3xl font-bold">
                  Dashboard
                </div>

              </div>
            </div> */}
            
            <div class="mt-9 w-full">
               <div class="px-6 py-4">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-2">
                        <div class="rounded col-span-2 bg-emerald-300 px-4 py-6 bg-opacity-20 relative">
                          <div class="w-96">
                            <div class="text-emerald-400 font-bold text-base">
                              Welcome
                            </div>
                            <div class="text-gray-500 text-sm mt-5">
                              Para esta semana tienes <strong>+ 12 personas</strong> a tu cooperacion y tu profit es de <strong>$684.435</strong>
                            </div>
                          </div>
                          <div class="w-52  h-52 absolute -top-1 right-0">
                            <img class="w-full h-full" src={svgLogo} />
                          </div>
                        </div>  
                       
                    </div>
                    <div class="">
                      <div class="bg-emerald-400 rounded px-4 py-4">
                        <div class="text-base font-bold mb-2 text-white">
                          Invitaciones
                        </div>
                        <div class="flex flex-col">
                          <div class="flex items-center">
                            <div class="text-white  text-opacity-90 text-xs">
                              Invitaciones enviadas
                            </div>
                            <div class="text-white text-xs text-light ml-auto text-base">
                              <strong>35</strong>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col my-2">
                          <div class="flex items-center">
                            <div class="text-white text-opacity-90 text-xs">
                              Invitados por semana
                            </div>
                            <div class="text-white text-xs text-light ml-auto text-base">
                              <strong>12</strong>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-col my-2">
                          <div class="flex items-center">
                            <div class="text-white text-opacity-90 text-xs">
                              Registros
                            </div>
                            <div class="text-white text-xs text-light ml-auto text-base">
                              <strong>2</strong>
                            </div>
                          </div>
                        </div>
                          <div class="mt-6 ml-auto flex justify-end items-center">
                            <a class="underline lowercase text-xs text-white font-light" href="">
                              Más
                            </a>
                            <div class="ml-2">
                              <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>
                            </div>
                          </div>
                      </div>
                    </div>
                   
                  </div>
                  <div class=" grid grid-cols-3 gap-4 mt-6">
                    <div class="">
                          <div class="w-full max-w-3xl">
                            <div class="-mx-2 md:flex">
                              <div class="w-full  px-2">
                                <div class="rounded-lg shadow-sm mb-4">
                                  <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow:hidden">
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                      <h4 class="text-sm uppercase text-gray-500 leading-tight">
                                       Ganado
                                      </h4>
                                      <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">
                                       $ 232
                                      </h3>
                                      <p class="text-xs text-green-500 leading-tight">
                                        🔺 20.9%
                                      </p>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                      <canvas id="chart1" height="70"></canvas>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div class="w-full max-w-3xl">
                            <div class="-mx-2 md:flex">
                              <div class="w-full  px-2">
                                <div class="rounded-lg shadow-sm mb-4">
                                  <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow:hidden">
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                      <h4 class="text-sm uppercase text-gray-500 leading-tight">
                                       Cash Flow
                                      </h4>
                                      <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">
                                        $34
                                      </h3>
                                      <p class="text-xs text-green-500 leading-tight">
                                        🔺 40.9%
                                      </p>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                      <canvas id="chart2" height="70"></canvas>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div class="w-full max-w-3xl">
                            <div class="-mx-2 md:flex">
                              <div class="w-full  px-2">
                                <div class="rounded-lg shadow-sm mb-4">
                                  <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow:hidden">
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                      <h4 class="text-sm uppercase text-gray-500 leading-tight">
                                       Potencial
                                      </h4>
                                      <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">
                                        63
                                      </h3>
                                      <p class="text-xs text-green-500 leading-tight">
                                        🔺 40.9%
                                      </p>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                      <canvas id="chart3" height="70"></canvas>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div class="mt-6">
      
                    <div>
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Ultimos 30 dias - Recompensas
                      </h3>
                      <dl class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                        <div class="px-4 py-5 sm:p-6 flex flex-col">
                          <dt class="text-base font-normal text-emerald-400 mb-6">
                            Para el primer registro en línea
                          </dt>
                          <dd class="mt-1 mt-auto flex justify-between items-baseline md:block lg:flex">
                            <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                              $50
                              
                            </div>

                            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-green-800 md:mt-2 lg:mt-0">
                              
                              <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                              </svg>
                              <span class="sr-only">
                                Increased by
                              </span>
                              12%
                            </div>
                          </dd>
                        </div>

                        <div class="px-4 py-5 sm:p-6 flex flex-col">
                          <dt class="text-base font-normal text-emerald-400 mb-6">
                            para el nivel "Inicio" en 3 líneas más de $ 100 en 2 períodos de pago

                          </dt>
                          <dd class="mt-1 mt-auto flex justify-between items-baseline md:block lg:flex">
                            <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                              $100
                              <span class="ml-2 text-sm font-medium text-gray-500">
                                
                              </span>
                            </div>

                            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-green-800 md:mt-2 lg:mt-0">
                              
                              <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                              </svg>
                              <span class="sr-only">
                                Increased by
                              </span>
                              2.02%
                            </div>
                          </dd>
                        </div>

                        <div class="px-4 py-5 sm:p-6 flex flex-col">
                          <dt class="text-base font-normal text-emerald-400">
                            para el nivel "Manager" en 3 líneas más de $ 300 en 3 períodos de pago
                          </dt>
                          <dd class="mt-1 mt-auto flex justify-between items-baseline md:block lg:flex">
                            <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                              $300
                            </div>

                            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                            
                              <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                              </svg>
                              <span class="sr-only">
                                Decreased by
                              </span>
                              4.05%
                            </div>
                          </dd>
                        </div>
                      </dl>
                    </div>

                  </div>
                 
                  
                  {/*<div class="three-invite">
                      <div class="main__three flex flex-col">
                          <div class="section__three" data-level="1">
                            <div class="flex flex-col items-center invite-train-three" >
                              <div class="w-24 h-24 ring-emerald-500 ring-2 z-20  rounded-full overflow-hidden">
                                <img src={avatar}/>
                              </div>
                              <div class="divider-three  h-24 border z-10">
                              
                              </div>
                            </div>
                          </div>

                          <div class="section__three flex w-full justify-center" data-level="2">
                              <div class="flex flex-col items-center invite-train-three " >
                                <div class="w-24 h-24 ring-emerald-500 ring-2 z-20  rounded-full overflow-hidden">
                                  <img src={avatar}/>
                                </div>
                                <div class="divider-three  h-24 border z-10">
                                
                                </div>
                              </div>
                              <div class="divider-three-horizontal w-24 h-24 relative  z-10">
                                <div class="absolute bg-gray-500 w-24 transform rotate-90" style={{height: "1px"}}>
                                
                                </div>
                                <div class="w-full bg-gray-500 absolute top-1/2 transform -translate-y-2/4" style={{height: "1px"}}>
                                
                                </div>
                              </div>
                              <div class="flex flex-col items-center invite-train-three " >
                                <div class="w-24 h-24 ring-emerald-500 ring-2 z-20  rounded-full overflow-hidden">
                                  <img src={avatar}/>
                                </div>
                                <div class="divider-three  h-24 border z-10">
                                
                                </div>
                              </div>
                          </div>
                      </div>
  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default App
