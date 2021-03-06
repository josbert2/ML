import React from 'react'
import '../styles/styles.css'
import  '../assets/scss/index.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Landing() {
  return (

      <div class="main__wrapper">
        <div class="main">
            <header class="bg-transparent sticky-bar mt-4">
                <div class="container px-4 mx-auto bg-transparent">
                    <nav class="bg-transparent flex justify-between items-center py-3">
                        <a class="text-3xl font-semibold leading-none" href="index.html">
                        <div class="text-base text-gray-900 font-extrabold ml-7">Skibit <strong class="text-emerald-500">global</strong></div>
                        </a>
                        <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li class="group relative pt-4 pb-4 has-child">
                                <a href="index.html" class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Home</a>
                                <ul
                                    class="absolute left-0 bg-white rounded-lg shadow-sm w-max mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500 min-w-200 pt-4 pb-4 border border-gray-100"
                                >
                                    <li>
                                        <a href="index.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Landing page 1</a>
                                    </li>
                                    <li>
                                        <a href="index-2.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Landing page 2</a>
                                    </li>
                                    <li>
                                        <a href="index-3.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Landing page 3</a>
                                    </li>
                                    <li>
                                        <a href="index-4.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Landing page 4</a>
                                    </li>
                                    <li>
                                        <a href="index-5.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Landing page 5</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pt-4 pb-4">
                                <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="about.html">About Us</a>
                            </li>
                            <li class="pt-4 pb-4">
                                <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="services.html">Services</a>
                            </li>
                            <li class="group relative pt-4 pb-4 has-child">
                                <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="#">Company</a>
                                <ul
                                    class="absolute left-0 bg-white rounded-lg shadow-sm w-max mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500 min-w-200 pt-4 pb-4 border border-gray-100"
                                >
                                    <li>
                                        <a href="portfolio.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="team.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Team</a>
                                    </li>
                                    <li>
                                        <a href="testimonials.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="pricing.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="faqs.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Faqs</a>
                                    </li>
                                    <li>
                                        <a href="404.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">404</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="group relative pt-4 pb-4 has-child">
                                <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="#">Blog</a>
                                <ul
                                    class="absolute left-0 bg-white rounded-lg shadow-sm w-max mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500 min-w-200 pt-4 pb-4 border border-gray-100"
                                >
                                    <li>
                                        <a href="blog.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Category 1</a>
                                    </li>
                                    <li>
                                        <a href="blog-2.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Category 2</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Single 1</a>
                                    </li>
                                    <li>
                                        <a href="blog-single-2.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Single 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pt-4 pb-4"><a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="contact.html">Contact</a></li>
                        </ul>
                        <div class="hidden lg:block">
                            <Link to="/login" class="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-emerald-500 hover:text-emerald-700 font-semibold leading-none border border-emerald-200 hover:border-emerald-300 rounded" href="login.html">
                           
                            Registrarme
                            </Link>
                           <Link to="/login" class="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs font-semibold leading-none bg-emerald-400 hover:bg-emerald-500 hov  text-white rounded">
                           Iniciar session
                           </Link>
                        </div>
                        <div class="lg:hidden">
                            <button class="navbar-burger flex items-center py-2 px-3 text-emerald-500 hover:text-emerald-700 rounded border border-emerald-200 hover:border-emerald-300">
                                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
            <div class="hidden navbar-menu relative z-50 transition duration-300">
                <div class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
                <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
                    <div class="flex items-center mb-8">
                        <a class="mr-auto text-3xl font-semibold leading-none" href="#">
                            <img class="h-10" src="http://wp.alithemes.com/html/monst/assets/imgs/logos/monst-logo.svg" alt="" />
                        </a>
                        <button class="navbar-close">
                            <svg class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul class="mobile-menu">
                            <li class="mb-1 menu-item-has-children rounded-xl">
                                <span class="menu-expand">+</span>
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500 rounded-xl" href="#">Home</a>
                                <ul class="dropdown pl-5" style={{ display: "none;" }}>
                                    <li>
                                        <a class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="index.html">Home 1</a>
                                    </li>
                                    <li>
                                        <a class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="index-2.html">Home 2</a>
                                    </li>
                                    <li>
                                        <a class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="index-3.html">Home 3</a>
                                    </li>
                                    <li>
                                        <a class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="index-4.html">Home 4</a>
                                    </li>
                                    <li>
                                        <a class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="index-5.html">Home 5</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="mb-1 rounded-xl">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500 rounded-xl" href="about.html">About Us</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="services.html">Services</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="portfolio.html">Portfolio</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="pricing.html">Pricing</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="team.html">Team</a>
                            </li>
                            <li class="mb-1 menu-item-has-children rounded-xl">
                                <span class="menu-expand">+</span>
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="team.html">Blog</a>
                                <ul class="dropdown pl-5" style={{ display: "none;" }}>
                                    <li>
                                        <a href="blog.html" class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500">Category 1</a>
                                    </li>
                                    <li>
                                        <a href="blog-2.html" class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500">Category 2</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.html" class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500">Single 1</a>
                                    </li>
                                    <li>
                                        <a href="blog-single-2.html" class="block p-3 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500">Single 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="faqs.html">Faqs</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="testimonials.html">Testimonial</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-emerald-50 hover:text-emerald-500" href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        <div class="mt-4 pt-6 border-t border-blueGray-100">
                            <a class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-emerald-500 hover:bg-emerald-700 text-white rounded" href="#">Sign Up</a>
                            <a class="block px-4 py-3 mb-2 text-xs text-center text-emerald-500 hover:text-emerald-700 font-semibold leading-none border border-emerald-200 hover:border-emerald-300 rounded" href="#">Log In</a>
                        </div>
                    </div>
                    <div class="mt-auto">
                        <p class="my-4 text-xs text-blueGray-400">
                            <span>Get in Touch</span>
                            <a class="text-emerald-500 hover:text-emerald-500 underline" href="#">contact@monst.com</a>
                        </p>
                        <a class="inline-block px-1" href="#">
                            <img src="assets/imgs/icons/facebook-blue.svg" alt="" />
                        </a>
                        <a class="inline-block px-1" href="#">
                            <img src="assets/imgs/icons/twitter-blue.svg" alt="" />
                        </a>
                        <a class="inline-block px-1" href="#">
                            <img src="assets/imgs/icons/instagram-blue.svg" alt="" />
                        </a>
                    </div>
                </nav>
            </div>
            <section class="hero-3">
                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap items-center -mx-3">
                        <div class="w-full lg:w-2/5 px-3">
                            <div class="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                <h2 class="text-3xl lg:text-4xl mb-4 font-bold font-heading wow animate__ animate__fadeIn animated">
                                    Exclusive Agency For <br />
                                    <span class="text-emerald-500">Technology </span>Provide Solution
                                </h2>
                                <p class="text-blueGray-400 leading-relaxed wow animate__ animate__fadeIn animated" >
                                    We are <strong class="text-emerald-500">Monst</strong>, a Creative Design
                                    <span class="typewrite d-inline text-brand" data-period="3000" data-type='["Web Agency", "Social Marketing" ]'><span class="wrap">Social Marketing</span></span>
                                </p>
                                <p class="text-blueGray-400 leading-relaxed wow animate__ animate__fadeIn mt-3 text-sm animated" >Helping you maximize operations management with digitization</p>
                            </div>
                            <div class="text-center lg:text-left">
                                <a
                                    class="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-emerald-500 hover:bg-emerald-700 rounded wow animate__ animate__fadeInUp animated"
                                    href="#key-features"
                                    
                                >
                                    Key Features
                                </a>
                                <a
                                    class="block sm:inline-block hover-up-2 py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__ animate__fadeInUp animated"
                                    data-wow-delay=".3s"
                                    href="#how-we-work"
                                    
                                >
                                    How We Work?
                                </a>
                            </div>
                        </div>
                        <div class="w-full lg:w-3/5 px-3 mb-12 lg:mb-0">
                            <div class="lg:h-128 flex items-center justify-center">
                                <img class="lg:max-w-lg" src="http://wp.alithemes.com/html/monst/assets/imgs/illustrations/work-tv.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           {/* <section class="py-12 md:pt-20 md:pb-12" id="how-we-work">
                <div class="container px-4 mx-auto">
                    <div class="max-w-lg mx-auto mb-20 text-center">
                        <span
                            class="inline-block text-xs py-1 px-3 text-emerald-700 font-semibold bg-emerald-100 rounded-xl wow animate__ animate__fadeInUp animated"
                            data-wow-delay=".5s"
                            
                        >
                            How we work
                        </span>
                        <h2 class="my-3 text-3xl md:text-4xl text-blueGray-900 font-bold font-heading wow animate__ animate__fadeInUp animated" data-wow-delay="0">
                            Partner Company Business And Me Success Fully
                        </h2>
                        <p class="text-blueGray-400 wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" >IT Solution For Your Business Is Best Theme</p>
                    </div>
                    <div class="relative max-w-6xl mx-auto wow animate__ animate__fadeIn animated" data-wow-delay=".3s" >
                        <img src="assets/imgs/elements/macbook.png" alt="" />
                        <div class="absolute" style="top: 5.8%; left: 14.6%; width: 72.8%; height: 76.7%;">
                            <div class="relative w-full">
                                <div class="carausel-fade-2 slick-carausel dot-style-1 slick-initialized slick-slider slick-dotted" id="carausel-fade-2-1">
                                    <div class="slick-list draggable">
                                        <div class="slick-track" style="opacity: 1; width: 2517px;">
                                            <img
                                                src="assets/imgs/placeholders/mockup-1.png"
                                                alt=""
                                                class="slick-slide"
                                                data-slick-index="0"
                                                aria-hidden="true"
                                                style="width: 839px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;"
                                                tabindex="-1"
                                                role="tabpanel"
                                                id="slick-slide00"
                                                aria-describedby="slick-slide-control00"
                                            />
                                            <img
                                                src="assets/imgs/placeholders/mockup-2.png"
                                                alt=""
                                                class="slick-slide slick-current slick-active"
                                                data-slick-index="1"
                                                aria-hidden="false"
                                                style="width: 839px; position: relative; left: -839px; top: 0px; z-index: 999; opacity: 1;"
                                                tabindex="0"
                                                role="tabpanel"
                                                id="slick-slide01"
                                                aria-describedby="slick-slide-control01"
                                            />
                                            <img
                                                src="assets/imgs/placeholders/mockup-3.png"
                                                alt=""
                                                class="slick-slide"
                                                data-slick-index="2"
                                                aria-hidden="true"
                                                style="width: 839px; position: relative; left: -1678px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;"
                                                tabindex="-1"
                                                role="tabpanel"
                                                id="slick-slide02"
                                                aria-describedby="slick-slide-control02"
                                            />
                                        </div>
                                    </div>

                                    <ul class="slick-dots" style="" role="tablist">
                                        <li class="" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabindex="-1">1</button></li>
                                        <li role="presentation" class="slick-active"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabindex="0" aria-selected="true">2</button></li>
                                        <li role="presentation" class=""><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="-1">3</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section class="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg');" }} id="key-features">
                <div class="container px-4 mx-auto">
                    <div class="max-w-lg mx-auto mb-12 text-center">
                        <h2 class="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" >
                            We Consultant to Get <br />
                            <span class="text-emerald-500">Our Business</span> Plan
                        </h2>
                        <p class="text-blueGray-400 leading-loose wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" >
                            Business solution company sit our any how site used the our company any site us it-solve theme is very professional
                        </p>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div
                                class="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".3s"

                            >
                                <div class="text-emerald-500 mx-auto mb-4">
                                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 class="mb-2 font-bold font-heading">IT Consultancy</h3>
                                <p class="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div
                                class="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".5s"
                                
                            >
                                <div class="text-emerald-500 mx-auto mb-4">
                                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 class="mb-2 font-bold font-heading">Web Development</h3>
                                <p class="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div
                                class="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".7s"
                               
                            >
                                <div class="text-emerald-500 mx-auto mb-4">
                                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 class="mb-2 font-bold font-heading">App Development</h3>
                                <p class="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div
                                class="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".9s"
     
                            >
                                <div class="text-emerald-500 mx-auto mb-4">
                                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-2 font-bold font-heading">Digital Marketing</h3>
                                <p class="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div
                                class="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".3s"
                               
                            >
                                <div class="text-emerald-500 mx-auto mb-4">
                                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-2 font-bold font-heading">Right Solutions</h3>
                                <p class="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div
                                class="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".5s"
                                
                            >
                                <div class="text-emerald-500 mx-auto mb-4">
                                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-2 font-bold font-heading">Responsive Site</h3>
                                <p class="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div
                                class="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".7s"
                               
                            >
                                <div class="text-emerald-500 mx-auto mb-4">
                                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 class="mb-2 font-bold font-heading">Clean Design</h3>
                                <p class="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div
                                class="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".9s"
                               
                            >
                                <div class="text-emerald-500 mx-auto mb-4">
                                    <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 class="mb-2 font-bold font-heading">Process Research</h3>
                                <p class="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a
                            class="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-emerald-500 hover:bg-emerald-700 rounded wow animate__ animate__fadeInUp animated"
                            data-wow-delay=".3s"
                            href="testimonials.html"
                          
                        >
                            Show more Testimonials
                        </a>
                    </div>
                </div>
            </section>
            <section class="py-20 xl:bg-contain bg-top bg-no-repeat" style={{backgroundImage: "url('assets/imgs/backgrounds/intersect.svg');"}}>
                <div class="container px-4 mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" >
                            <span>Start saving time today and</span>
                            <span class="text-emerald-500">choose</span>
                            <span>your best plan</span>
                        </h2>
                        <p class="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__ animate__fadeInDown animated" data-wow-delay=".5s">
                            Best for freelance developers who need to save their time
                        </p>
                    </div>
                    <div class="flex flex-wrap -mx-3">
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div class="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" >
                                <img class="h-20 mb-6 mx-auto" src="assets/imgs/icons/startup.svg" alt="" />
                                <h3 class="mb-2 text-4xl font-bold font-heading">Startup</h3>
                                <span class="text-4xl text-emerald-500 font-bold font-heading">$45.99</span>
                                <p class="mt-2 mb-8 text-blueGray-400">user per month</p>
                                <div class="flex flex-col items-center mb-8">
                                    <ul class="text-blueGray-400">
                                        <li class="flex mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>3 Emails</span>
                                        </li>
                                        <li class="flex mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>1 Datebases</span>
                                        </li>
                                        <li class="flex mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Unlimited Domains</span>
                                        </li>
                                        <li class="flex">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>10 GB Storage</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a class="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-emerald-500 hover:bg-emerald-700 rounded" href="#">Start Free Trial</a>
                                    <a class="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div
                                class="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-emerald-500 rounded shadow wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".4s"

                            >
                                <img class="h-20 mb-6 mx-auto" src="assets/imgs/icons/agency.svg" alt="" />
                                <h3 class="mb-2 text-4xl font-bold font-heading">Agency</h3>
                                <span class="text-4xl font-bold font-heading">$65.99</span>
                                <p class="mt-2 mb-8">user per month</p>
                                <div class="flex flex-col items-center mb-8">
                                    <ul>
                                        <li class="flex items-center mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>6 Emails</span>
                                        </li>
                                        <li class="flex items-center mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>4 Datebases</span>
                                        </li>
                                        <li class="flex items-center mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Unlimited Domains</span>
                                        </li>
                                        <li class="flex items-center">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>35 GB Storage</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a class="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-emerald-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">Start Free Trial</a>
                                    <a class="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border border-emerald-500 hover:border-emerald-400 rounded" href="#">Purchase</a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full lg:w-1/3 px-3 mb-6">
                            <div class="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__ animate__fadeInUp animated" data-wow-delay=".6s" >
                                <img class="h-20 mb-6 mx-auto" src="assets/imgs/icons/enterprise.svg" alt="" />
                                <h3 class="mb-2 text-4xl font-bold font-heading">Enterprise</h3>
                                <span class="text-4xl text-emerald-500 font-bold font-heading">$85.99</span>
                                <p class="mt-2 mb-8 text-blueGray-400">user per month</p>
                                <div class="flex flex-col items-center mb-8">
                                    <ul class="text-blueGray-400">
                                        <li class="flex mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>12 Emails</span>
                                        </li>
                                        <li class="flex mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>8 Datebases</span>
                                        </li>
                                        <li class="flex mb-3">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Unlimited Domains</span>
                                        </li>
                                        <li class="flex">
                                            <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>50 GB Storage</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a class="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-emerald-500 hover:bg-emerald-700 rounded" href="#">Start Free Trial</a>
                                    <a class="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-20 bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg');" }}>
                <div class="container px-4 mx-auto">
                    <div class="relative py-20 px-4 lg:p-20">
                        <div class="max-w-lg mx-auto text-center">
                            <h2 class="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated" >
                                <span>Subscribe now to</span>
                                <span class="text-emerald-500">Our Newsletter</span>
                                <span>and get the Coupon code.</span>
                            </h2>
                            <p class="mb-8 text-blueGray-400 wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" >
                                All your information is completely confidential
                            </p>
                            <div class="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__ animate__fadeInUp animated" data-wow-delay=".5s" >
                                <div class="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                    <svg class="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <input class="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="text" placeholder="Type your e-mail" />
                                </div>
                                <button class="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-emerald-500 hover:bg-emerald-700 rounded" type="submit">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-20">
                <div class="container px-4 mx-auto wow animate__ animate__fadeIn animated" data-wow-delay=".3s">
                    <div class="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                        <div class="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                        <a class="text-3xl font-semibold leading-none" href="index.html"><div class="text-base text-gray-900 font-extrabold ml-7">Skibit <strong class="text-emerald-500">global</strong></div></a>
                        </div>
                        <div class="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                            <p class="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">Helping you <strong>maximize</strong> operations management with digitization</p>
                        </div>
                        <div class="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
                            <p class="lg:text-lg text-blueGray-400">359 Hidden Valley Road, NY</p>
                        </div>
                        <div class="w-full lg:w-1/5 px-3">
                            <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacts</p>
                            <p class="lg:text-lg text-blueGray-400">(+01) 234 568</p>
                            <p class="lg:text-lg text-blueGray-400">contact@monst.com</p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p class="text-sm text-blueGray-400">?? 2021. All rights reserved. Designed by <a class="text-emerald-400" href="https://alithemes.com" target="_blank">Alithemes.com</a></p>
                        <div class="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a class="inline-block px-2" href="#">
                                <img src="assets/imgs/icons/facebook-blue.svg" alt="" />
                            </a>
                            <a class="inline-block px-2" href="#">
                                <img src="assets/imgs/icons/twitter-blue.svg" alt="" />
                            </a>
                            <a class="inline-block px-2" href="#">
                                <img src="assets/imgs/icons/instagram-blue.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

      </div>

  )
}

export default Landing
