"use client";
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Home() {
  const router = useRouter();
  const handleSubmit = () =>{
    router.push("/something");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-black bg-gradient-to-r from-teal-500 to-slate-500 p-2 rounded">
        <div>
          <form onSubmit={handleSubmit}>
            <input className="p-2 my-2 rounded" placeholder="Username"></input>
            <input className="p-2 my-2 block rounded" placeholder="Password" type="password"></input>
            <input className="active:bg-pink-500"type="submit"/>
          </form>
        </div>
      </div>
    </main>
  )
}
