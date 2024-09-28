import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Clock from '../Clock'

function Footer() {
    
        return (
          <footer className="px-32 py-4 w-full bg-neutral-100 flex-shrink-0">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
              <div className="flex flex-row pr-3 space-x-4 sm:space-x-8 justify-center">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 font-semibold  ">
                  blogAble
                </div>
               <Clock/>
              </div>
              <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                <li>
                  <a href="https://www.instagram.com/kanak_k365/">Instagram</a>
                </li>
                <li>
                  <a href="https://github.com/kanakk365">Github</a>
                </li>
                <li>
                  <a href="https://x.com/Kanak28360217">Twitter</a>
                </li>
              </ul>
            </div>
          </footer>
        )
      }

export default Footer