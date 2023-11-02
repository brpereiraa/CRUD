"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const router = useRouter();
  const handleSubmit = (e:any) =>{
    e.preventDefault();
    router.push("/something");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="m-auto w-4/12 text-black bg-gradient-to-r from-teal-300 to-slate-800 py-8 px-2 rounded">
        <form className="w-full flex flex-col justify-center " onSubmit={handleSubmit}>
          <input className="w-7/12 p-4 my-4 rounded mx-auto" placeholder="Username"></input>
          <input className="w-7/12 p-4 my-4 rounded mx-auto" placeholder="Password" type="password"></input>
          <input className="w-5/12 mt-6 bg-gradient-to-r from-red-400 to-pink-700 hover:cursor-pointer active:translate-x-1 active:translate-y-0.5 mx-auto rounded p-2"type="submit"/>
        </form>
      </div>
    </main>
  )
}
