import Link from 'next/link';
import React from 'react';

export default function JobleeFeatures() {
  return (
    <div id="joblee-features" className='flex flex-col items-center justify-center  p-4'>
      <div className='grid grid-cols-2 gap-4 justify-center'>
        <div className='md:w-[400px] sm:w-[200px] h-[300px] border-2  mx-auto'>
          <p>nsjkhkhkhjkhk</p>
        </div>
        <div className='md:w-[400px] sm:w-[200px] h-[300px] border-2 mx-auto'>
          <h2 className='text-2xl  font-bold mb-4'>What Joblee Does</h2>
          <p className='text-lg'>
            Joblee will turn the job searching into a little game
          </p>
          {/* Add more content here */}
        </div>
      </div>
      <button className='h-[30px] w-[30px]'>
        <Link href='/jobs'>
        Start your journey
        </Link>
        </button>
    </div>
  );
}
