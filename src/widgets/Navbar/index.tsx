'use client';
import Link from 'next/link';

import Button from '@/components/Button';
import NavLink from './NavLink';
import Wrapper from '@/components/Wrapper';
import { useState } from 'react';
import useScrollDirection from '@/hooks/useScrollDirection';

export default function Navbar() {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [hoverHamburger, setHoverHamburger] = useState(false);
  const [isScrollDirectionDown, resetScrollDirection] = useScrollDirection();

  return (
    <div className="fixed w-full bg-white z-50">
      <nav
        className={`bg-white w-full shadow fixed transition-all ${
          isScrollDirectionDown && !activeHamburger ? '-translate-y-20' : null
        }`}
      >
        <Wrapper>
          {/* desktop size sceen */}
          <div className="lg:flex hidden justify-between py-3">
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
          {/* sidebar */}
          <div
            className={`lg:hidden flex absolute z-50 top-0 left-0 transition-transform duration-500 md:w-1/2 w-8/12 ${
              activeHamburger ? 'transform-none' : '-translate-x-full'
            }`}
          >
            <ul className="bg-white flex flex-col p-5 h-screen w-full">
              <Link href={'/'} onClick={() => setActiveHamburger(false)}>
                <NavLink>Home</NavLink>
              </Link>
              <Link href={'/about'} onClick={() => setActiveHamburger(false)}>
                <NavLink>About</NavLink>
              </Link>
              <Link
                href={'/services'}
                onClick={() => setActiveHamburger(false)}
              >
                <NavLink>Services</NavLink>
              </Link>
              <Link href={'/contact'} onClick={() => setActiveHamburger(false)}>
                <NavLink>Contact</NavLink>
              </Link>
              <Button>Get Started</Button>
            </ul>
          </div>
          <div
            onClick={() => {
              setActiveHamburger(false);
              resetScrollDirection();
            }}
            className={`absolute z-10 top-0 left-0 w-screen h-screen bg-black cursor-pointer transition-all duration-500 ${
              activeHamburger ? 'opacity-25' : 'opacity-0 pointer-events-none'
            }`}
          ></div>
          <div className="lg:hidden flex justify-between py-3">
            <div className="flex items-center">
              <h1 className="font-medium text-4xl">Brand</h1>
            </div>

            {/* hamburger */}
            <div
              onClick={() => {
                resetScrollDirection();
                setActiveHamburger(!activeHamburger);
              }}
              onMouseEnter={() => setHoverHamburger(true)}
              onMouseLeave={() => setHoverHamburger(false)}
              className="w-16 h-[54px] flex relative"
            >
              <div
                className="space-y-2 p-4 rounded-lg shadow bg-blue-500 transition-colors duration-300
                  cursor-pointer absolute z-50"
              >
                <span
                  className={`block w-8 h-0.5 bg-white transition-transform duration-200  ${
                    activeHamburger ? 'translate-y-[10px] -rotate-45' : null
                  }`}
                ></span>
                <span
                  className={`block w-7 h-0.5 transition-all duration-200 ${
                    hoverHamburger && !activeHamburger ? 'w-8' : null
                  } ${activeHamburger ? 'bg-transparent' : 'bg-white'}`}
                ></span>
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    hoverHamburger && !activeHamburger ? 'w-8' : null
                  } ${
                    activeHamburger ? 'w-8 -translate-y-[10px] rotate-45' : ''
                  } ${!hoverHamburger && !activeHamburger ? 'w-5' : null}`}
                ></span>
              </div>
            </div>
          </div>
        </Wrapper>
      </nav>
    </div>
  );
}
