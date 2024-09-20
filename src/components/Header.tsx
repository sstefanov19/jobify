"use client";
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import React from 'react';

import Link from 'next/link';

export default function Header() {
  const { isSignedIn } = useUser();


  return (
    <header className='w-screen h-[100px] bg-gradient-to-b from-slate-600 to-slate-800 text-white flex flex-col items-center justify-center shadow-lg'>

      <div className="w-full max-w-6xl flex justify-between items-center px-6 py-4">
        <Link href="/">
        <h1 className='text-white text-3xl font-bold'>Joblee</h1>
        </Link>
        <nav className="flex space-x-6">
          <Link href="/jobs" className="text-white text-lg hover:underline">Jobs</Link>
          <Link href="/about" className="text-white text-lg hover:underline">About us</Link>
          <Link href="/savedjobs" className="text-white text-lg hover:underline">Saved Jobs</Link>
        </nav>
        <div>
          {isSignedIn ? <UserButton  /> : <SignInButton />}
        </div>
      </div>

    </header>
  );
}
