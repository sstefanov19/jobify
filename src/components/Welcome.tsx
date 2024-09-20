import Link from 'next/link';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

export default function Welcome() {
  return (
    <div className='flex flex-col h-[900px] items-center justify-center  text-white p-4'>
      <h1 className='text-4xl font-bold mb-4'>
        Welcome <span className='text-3xl text-yellow-400'>to Joblee</span>
      </h1>
      <p className='text-lg text-center max-w-md'>
        Are you bored from the job search? Why not make it interesting with Joblee
      </p>
      <p className='text-lg text-center'>Joblee will help you find your new job but in interesting way</p>
      <Link href="#joblee-features" className='mt-16'>
        <FaArrowDown className='text-4xl text-slate-200 animate-bounce' />
      </Link>
    </div>
  );
}
