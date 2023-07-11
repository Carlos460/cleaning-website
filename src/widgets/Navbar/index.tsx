'use client';
import Link from 'next/link';

import Button from '@/components/Button';
import NavLink from './NavLink';
import Wrapper from '@/components/Wrapper';
import { useState } from 'react';

export default function Navbar() {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [hoverHamburger, setHoverHamburger] = useState(false);

  return (
    <Wrapper>
      <nav>
        {/* desktop size sceen */}
        <div className="lg:flex hidden justify-between py-5">
          <div className="flex items-center">
            <h1 className="font-medium text-4xl">Brand</h1>
          </div>
          <div className="flex gap-x-10">
            <ul className="flex gap-x-10 items-center">
              <NavLink>
                <Link href={'/'}>Home</Link>
              </NavLink>
              <NavLink>
                <Link href={'/about'}>About</Link>
              </NavLink>
              <NavLink>
                <Link href={'/services'}>Services</Link>
              </NavLink>
              <NavLink>
                <Link href={'/contact'}>Contact</Link>
              </NavLink>
            </ul>
            <Button>Get a free quote</Button>
          </div>
        </div>

        {/* mobile size sceen */}
        <div className="lg:hidden flex justify-between h-24 relative">
          <div className="flex items-center">
            <h1 className="font-medium text-4xl">Brand</h1>
          </div>

          <div
            onClick={() => setActiveHamburger(!activeHamburger)}
            onMouseEnter={() => setHoverHamburger(true)}
            onMouseLeave={() => setHoverHamburger(false)}
            className="p-4 rounded-lg shadow bg-blue-500 hover:bg-blue-400 transition-colors duration-300
            my-auto cursor-pointer "
          >
            {/* hamburger */}
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 bg-white transition-transform duration-200  ${
                  activeHamburger ? 'translate-y-[10px] -rotate-45' : null
                }`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-white transition-all duration-200 ${
                  hoverHamburger && !activeHamburger ? 'w-8' : null
                } ${activeHamburger ? 'bg-transparent' : null}`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  hoverHamburger && !activeHamburger ? 'w-8' : null
                } ${
                  activeHamburger ? 'w-8 -translate-y-[10px] rotate-45' : ''
                } ${!hoverHamburger && !activeHamburger ? 'w-5' : null}`}
              ></span>
            </div>

            {/* sidebar */}
            <div className={`${activeHamburger ? '' : ''}`}></div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
