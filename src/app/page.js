import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <nav className='px-4 md:px-0 w-full h-[80px] bg-indigo-500 text-white'>
        <div className='container mx-auto h-full flex items-center justify-between'>
          <Image src="/logo.png" width="80" height="60" alt='Logo image' />
          <ul className='flex gap-10'>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/signup">Signup</Link></li>
            <li><Link href="/dashboard/profile">Dashboard</Link></li>
          </ul>
        </div>
      </nav>

      <div className='relative w-full h-[calc(100vh-80px)] bg-red-500' style={{backgroundImage: 'url(https://img.freepik.com/free-vector/5g-networking-technology-background-with-blue-digital-line_53876-119505.jpg?w=740&t=st=1692161022~exp=1692161622~hmac=4eb64800cba0d8e76976b27ec18ed378395a2b695f21408394a06be1d6a3deee)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        {/* overlay */}
        <div className='w-full h-full absolute bg-black bg-opacity-75'></div>

        <div className='relative container mx-auto h-full flex items-center justify-between'>
            <div className='px-4 md:px-0 w-full text-center text-white space-y-4'>
                <h2 className='text-4xl md:text-6xl font-semibold'>Welcome to <span className="text-indigo-500">ORU Phones</span></h2>
                <h3 className='text-2xl md:text-3xl font-semibold'>You are not a member yet?</h3>
                <p className='text-lg md:text-xl font-smeibold'>
                  <Link href="/login" className='hover:underline hover:text-indigo-500'>Login</Link> Or
                  <Link href="/signup" className='hover:underline hover:text-indigo-500'> Signup</Link>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

{/* <div className='text-center'>
  <h1 className="text-5xl font-bold mb-5">Welcome <br /> To Oru Phones</h1>
  <h3 className="text-2xl font-bold">
    <Link href="/login" className='text-blue-500 hover:underline'>Login</Link> or
    <Link href="/signup" className='text-red-500 hover:underline'> Sign Up</Link>
  </h3>
</div> */}