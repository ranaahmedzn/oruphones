import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className='text-center'>
        <h1 className="text-5xl font-bold mb-5">Welcome <br /> To Oru Phones</h1>
        <h3 className="text-2xl font-bold">
          <Link href="/login" className='text-blue-500 hover:underline'>Login</Link> or 
          <Link href="/signup" className='text-red-500 hover:underline'> Sign Up</Link>
        </h3>
      </div>
    </div>
  )
}

export default Home;