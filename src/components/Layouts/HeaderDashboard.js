import React from 'react'
import '../../styles/styles.css'
import  '../../assets/scss/index.scss'
import logo from '../../assets/img/logo.svg'
// Blanco, oro, negro
// Skibit Global
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import avatar from '../../assets/img/avatar-300x300.jpg'
import svgLogo from '../../assets/img/undraw_transfer_money_rywa.svg'
function Header() {
  return (
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
   )
}

export default Header