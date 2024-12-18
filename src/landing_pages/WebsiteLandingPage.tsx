'use client';

import { WebsiteContent } from '@/Layouts/components/WebsiteContent';
import dynamic from 'next/dynamic';
import React from 'react';
import avatar from "@/assets/image 1.png";
import arrow from "@/assets/Arrow.png";
import Image from 'next/image';
import bgGradient from '@/assets/Gradient-1.png';


const WebsiteLandingPage = () => {
  return (
    <WebsiteContent>
      <div className='relative w-full mx-auto flex flex-col  p-4 2xl:p-8'>  

        <div className="relative flex items-center 2xl:flex-row  2xl:items-start">

          <div
            className='flex items-center w-[200px] h-[160px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]'
            style={{
              backgroundImage: `url(${bgGradient.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Image
              src={avatar}
              alt="Avatar"
              className="w-[80px] h-[100px] sm:w-[120px] sm:h-[180px] lg:w-[120px] lg:h-[180px] mt-4 mx-auto"
            />

          </div>

          <div className="absolute flex -top-10 left-[70%] sm:left-1/2 lg:left-[10%] lg:-top-0 w-[300px] sm:w-[350px] lg:w-[400px] transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2">
            <Image
              src={arrow}
              alt="Arrow"
              className='w-24 sm:w-28 lg:w-36'
            />  
            <h1 className="text-sm sm:text-base lg:text-lg">
              Hello! I am <span className="text-purple-300">Sidi Eyel</span>
            </h1>
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              A Designer who <br />
              Judges a book by its <span className="text-purple-400">cover</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base mt-2 text-purple-200 ">
              Because if the cover does not impress you, what else can?
            </p>
          </div>

        </div>

        <div className="mt-14 text-center lg:text-left" >
          <h3 className="text-2xl sm:text-3xl lg:text-3xl font-semibold">I'm a Software Engineer.</h3>
          <p className="text-purple-300 mt-2">
            Currently, I'm a Software Engineer at{' '}
            <span className="text-blue-500 font-medium">@Smart</span>.
          </p>
          <p className="text-xs sm:text-sm lg:text-base mt-4 text-purple-200">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          </p>
        </div>

      </div>
    </WebsiteContent>
  )  
}
 
export default dynamic (() => Promise.resolve(WebsiteLandingPage), {ssr: false})
