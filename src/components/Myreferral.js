import React from 'react'
import '../styles/styles.css'
import  '../assets/scss/index.scss'
import logo from '../assets/img/logo.svg'
// Blanco, oro, negro
// Skibit Global
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './Layouts/HeaderDashboard'
import Siderbar from './Layouts/Siderbar'
import avatar from '../assets/img/avatar-300x300.jpg'
import svgLogo from '../assets/img/undraw_transfer_money_rywa.svg'
function MyReferral() {
   document.body.style.backgroundColor = "whitesmoke";
  return (

      <div class="main__wrapper">
        <Header />
        <div class=" pt-12 flex">
          <Siderbar/>
          <div class="  ml-56 w-full">
            <div class="mt-9 w-full px-5">
               <div class="text-xl font-bold text-gray-800">
                  My Referrals
               </div>
               <div class=" bg-white py-8 grid-cols-3 grid mt-8 divide-x shadow overflow-hidden 0 sm:rounded-lg">
                  <div class="place-items-center flex flex-col">
                        <div class="w-20 h-20 mb-3">
                           <img src="https://htmlstream.com/front-dashboard/assets/svg/illustrations/click.svg"/>
                        </div>
                        <div class="text-gray-500 text-sm">
                           Numero de referidos
                        </div>
                        <div class="number text-xl font-bold py-3">
                           150
                        </div>
                        <div class="grid grid-cols-2  divide-x w-full">
                           <div class="flex justify-end w-full pr-4">
                                 <div class="flex flex-col">
                                    <div class="flex items-center  ">
                                       <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                          <g id="vuesax_outline_export" data-name="vuesax/outline/export" transform="translate(-108 -508)">
                                             <g id="export">
                                                <path class="fill-current text-emerald-500" id="Vector" d="M10.75,21.5a10.75,10.75,0,0,1,0-21.5.755.755,0,0,1,.75.75.755.755,0,0,1-.75.75A9.25,9.25,0,1,0,20,10.75a.75.75,0,0,1,1.5,0A10.759,10.759,0,0,1,10.75,21.5Z" transform="translate(109.25 509.25)" fill="#292d32"/>
                                                <path class="fill-current text-emerald-500" id="Vector-2" data-name="Vector" d="M.747,9.7a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l8.2-8.2a.75.75,0,0,1,1.06,1.06l-8.2,8.2A.742.742,0,0,1,.747,9.7Z" transform="translate(120.253 510.052)" fill="#292d32"/>
                                                <path class="fill-current text-emerald-500" id="Vector-3" data-name="Vector" d="M5.58,6.33a.755.755,0,0,1-.75-.75V1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H5.58a.755.755,0,0,1,.75.75V5.58A.755.755,0,0,1,5.58,6.33Z" transform="translate(124.42 509.25)" fill="#292d32"/>
                                                <path class="fill-current text-emerald-500" id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 508)" fill="none" opacity="0"/>
                                             </g>
                                          </g>
                                       </svg>
                                       <span class="te text text-emerald-500  text-xs ml-2">12%</span>

                                    </div>
                                    <div class="text-xs text-gray-400 text-right mt-1">
                                       Subida
                                    </div>
                                 </div>
                           </div>
                           <div class="flex justify-start pl-4">
                              <div class="flex flex-col">
                                 <div class="text-xs">
                                 25
                                 </div>
                                 <div class="text-xs text-gray-400 mt-1">
                                 última semana
                                 </div>   
                              </div>
                           </div>
                        </div>
                  </div>
                  <div class="place-items-center flex flex-col">
                        <div class="w-20 h-20 mb-3">
                           <img src="https://htmlstream.com/front-dashboard/assets/svg/illustrations/presenting.svg"/>
                        </div>
                        <div class="text-gray-500 text-sm">
                           Obtenido
                        </div>
                        <div class="number text-xl font-bold py-3">
                           $7,253.00
                        </div>
                        <div class="grid grid-cols-2  divide-x w-full">
                           <div class="flex justify-end w-full pr-4">
                                 <div class="flex flex-col">
                                    <div class="flex items-center ">
                                       <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                          <g id="vuesax_outline_export" data-name="vuesax/outline/export" transform="translate(-108 -508)">
                                             <g id="export">
                                                <path class="fill-current text-emerald-500" id="Vector" d="M10.75,21.5a10.75,10.75,0,0,1,0-21.5.755.755,0,0,1,.75.75.755.755,0,0,1-.75.75A9.25,9.25,0,1,0,20,10.75a.75.75,0,0,1,1.5,0A10.759,10.759,0,0,1,10.75,21.5Z" transform="translate(109.25 509.25)" fill="#292d32"/>
                                                <path class="fill-current text-emerald-500" id="Vector-2" data-name="Vector" d="M.747,9.7a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l8.2-8.2a.75.75,0,0,1,1.06,1.06l-8.2,8.2A.742.742,0,0,1,.747,9.7Z" transform="translate(120.253 510.052)" fill="#292d32"/>
                                                <path class="fill-current text-emerald-500" id="Vector-3" data-name="Vector" d="M5.58,6.33a.755.755,0,0,1-.75-.75V1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H5.58a.755.755,0,0,1,.75.75V5.58A.755.755,0,0,1,5.58,6.33Z" transform="translate(124.42 509.25)" fill="#292d32"/>
                                                <path class="fill-current text-emerald-500" id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 508)" fill="none" opacity="0"/>
                                             </g>
                                          </g>
                                       </svg>
                                       <span class="te text text-emerald-500 text-xs ml-2">56%</span>

                                    </div>
                                    <div class="text-xs text-gray-400 text-right mt-1">
                                       Subida
                                    </div>
                                 </div>
                           </div>
                           <div class="flex justify-start pl-4">
                              <div class="flex flex-col">
                                 <div class="text-xs">
                                 $582.00
                                 </div>
                                 <div class="text-xs text-gray-400 mt-1">
                                                                  última semana
                                                                  </div>   
                              </div>
                           </div>
                        </div>
                  </div>
                  <div class="place-items-center flex flex-col">
                        <div class="w-20 h-20 mb-3">
                           <img src="https://htmlstream.com/front-dashboard/assets/svg/illustrations/hi-five.svg"/>
                        </div>
                        <div class="text-gray-500 text-sm">
                           Referido completado
                        </div>
                        <div class="number text-xl font-bold py-3">
                           25
                        </div>
                        <div class="grid grid-cols-2  divide-x w-full">
                           <div class="flex justify-end w-full pr-4">
                                 <div class="flex flex-col">
                                    <div class="flex items-center ">
                                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                       <g id="vuesax_outline_frame" data-name="vuesax/outline/frame" transform="translate(-172 -508)">
                                          <g id="frame">
                                             <path class="fill-current text-red-500" id="Vector" d="M10.75,21.5a10.75,10.75,0,0,1,0-21.5.755.755,0,0,1,.75.75.755.755,0,0,1-.75.75A9.25,9.25,0,1,0,20,10.75a.75.75,0,0,1,1.5,0A10.759,10.759,0,0,1,10.75,21.5Z" transform="translate(173.25 509.25)" fill="#292d32"/>
                                             <path class="fill-current text-red-500" id="Vector-2" data-name="Vector" d="M.747,9.7a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l8.2-8.2a.75.75,0,0,1,1.06,1.06l-8.2,8.2A.749.749,0,0,1,.747,9.7Z" transform="translate(185.053 509.253)" fill="#292d32"/>
                                             <path class="fill-current text-red-500" id="Vector-3" data-name="Vector" d="M5.58,6.33H.75A.755.755,0,0,1,0,5.58V.75A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75V4.83H5.58a.75.75,0,0,1,0,1.5Z" transform="translate(184.25 513.42)" fill="#292d32"/>
                                             <path class="fill-current text-red-500" id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 508)" fill="none" opacity="0"/>
                                          </g>
                                       </g>
                                       </svg>

                                       <span class="te text text-red-500 text-xs ml-2">3.2%</span>

                                    </div>
                                    <div class="text-xs text-gray-400 text-right mt-1">
                                       Subida
                                    </div>
                                 </div>
                           </div>
                           <div class="flex justify-start pl-4">
                              <div class="flex flex-col">
                                 <div class="text-xs">
                                 7
                                 </div>
                                 <div class="text-xs text-gray-400 mt-1">
                                                                  última semana
                                                                  </div>   
                              </div>
                           </div>
                        </div>
                  </div>
               </div>
               <div class="grid-cols-3 grid gap-5 mt-12">
                  <div class="col-span-2"> 
                  <div class="flex flex-col text-left">
                     <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                           <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                           <table class="min-w-full divide-y divide-gray-200">
                              <thead class="bg-gray-50">
                                 <tr>
                                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                 </th>
                                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                 </th>
                                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                 </th>
                                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                 </th>
                                 <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                 </th>
                                 </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200">
                                 <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                       <div class="flex items-center">
                                          <div class="flex-shrink-0 h-10 w-10">
                                          <img class="h-10 w-10 rounded-full"
                                             src="https://api.lorem.space/image/face?w=150&h=150                                             "
                                             alt="" />
                                          </div>
                                          <div class="ml-4">
                                          <div class="text-sm font-medium text-gray-900">
                                             Flora Wu
                                          </div>
                                          <div class="text-sm text-gray-500">
                                             flora.wu@example.com
                                          </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                       <div class="text-sm text-gray-900">Software engineer</div>
                                       <div class="text-sm text-gray-500">IT</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                       <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                                          Active
                                       </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                       Admin
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                       <a href="#" class="text-indigo-600 hover:text-indigo-900">Viewt</a>
                                    </td>
                                    </tr>
                                 
                                 

                          
                              </tbody>
                           </table>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div>
                  
                  <div>
                     <div class="boxing-session-flag bg-white rounded-md border">
                        <div class="flex items-center p-4 border-b">
                           <div class=" ">
                           Your top countries 
                           </div>
                           <div class="uppercase ml-auto bg-emerald-100 text-xs p-2 text-emerald-700 rounded ">
                              ver todo
                           </div>
                        </div>
                        <div class="flex items-center px-3 py-3">
                           <div class=" flex items-center">
                              <div class="w-6  h-6 rounded-full">
                                 <img class="w-full h-full rounded-full object-cover" src="https://htmlstream.com/front-dashboard/assets/vendor/flag-icon-css/flags/1x1/us.svg" />
                              </div>
                              <span class="ml-2 text-xs text-gray-400   ">United States</span>
                           </div>
                           <div class=" font-bold ml-auto">
                              $4.302.00
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default MyReferral
