"use client"
import React from "react";
import Newsletter from "./newsletter/newsletter";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
   <Newsletter/>
     {/* <FooterLast/> */}
    </div>
  );
}
const FooterLast=()=>{
  return(
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/4 md:w-1/3 w-1/2 px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">About Us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Revolutionizing the Food Industry with AI</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Commitment to Community</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Innovation & Technology</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sustainability & Responsibility</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/3 w-1/2 px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">Services</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">AI Sales Forecasting</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Automated Ordering</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Real-Time Product Monitoring</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Group Restaurant Finder</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/3 w-1/2 px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">Industries</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Food & Beverage</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Retail</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Local Chains</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Independent Shops</a>
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/3 w-1/2 px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">Resources</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Case Studies</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Guides & Tutorials</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">FAQs</a>
          </li>
        </nav>
      </div> 
    </div>
  </div>
   {/* <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" jf-ext-cache-id="1"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" jf-ext-button-ct="button">Button</button>
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
          <br className="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
      
    </div>
  </div> */}
  <div className="bg-gray-100">
    <div className="container mx-auto text-zinc-600 py-4 px-5 flex flex-wrap flex-col space-x-6 sm:flex-row">
      <p className=" text-sm text-center sm:text-left">© 2024 Keybolt —- 
        {/* <a href="https://twitter.com/knyttneve" className=" ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a> */}
      </p>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center  md:justify-start md:w-auto">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
      
     
    </div>
  </div>
</footer>)}









