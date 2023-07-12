'use client';

import { useState } from 'react';
import { BodyText } from '../Typography';

interface IDropDownInfo {
  title: string;
  text: string;
}

export default function DropDownInfo(props: IDropDownInfo) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setActive(!active)}
        className="hover:translate-x-5 cursor-pointer transition-transform duration-300 ease-in-out"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-semibold md:text-2xl text-lg py-2 ">
            {props.title}
          </h1>
          <div
            className={`flex-shrink-0 rounded-full w-14 h-14 border border-solid transition-colors ${
              active ? 'bg-blue-600' : 'bg-white'
            }`}
          ></div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            active
              ? 'mb-10 mt-5 max-h-40 opacity-100'
              : 'mb-0 mt-0 max-h-0 opacity-0'
          }`}
        >
          <BodyText>{props.text}</BodyText>
        </div>
      </div>
      <div className="border-b"></div>
    </>
  );
}
