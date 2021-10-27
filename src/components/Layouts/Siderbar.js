import React from 'react'
import '../../styles/styles.css'
import  '../../assets/scss/index.scss'
import logo from '../../assets/img/logo.svg'
// Blanco, oro, negro
// Skibit Global
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import avatar from '../../assets/img/avatar-300x300.jpg'
import svgLogo from '../../assets/img/undraw_transfer_money_rywa.svg'
function Siderbar() {
  return (
      <div>
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
      </div>
   )
}

export default Siderbar