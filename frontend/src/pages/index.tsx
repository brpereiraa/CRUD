import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const handleSubmit = (e:any) =>{
    e.preventDefault();
    navigate('/home');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-950">
      <div className="m-auto w-4/12 text-black  border-white py-8 px-2 rounded">
        <div className="m-auto text-center mb-12">
          <p className="text-white font-bold text-2xl text-teal-200">Login to use the App</p>
        </div>
        <form className="w-full flex flex-col justify-center " onSubmit={handleSubmit}>
          <p className="text-white font-bold font-xl text-center">Name:</p>
          <input className="w-7/12 p-4 my-4 rounded mx-auto" placeholder="Username"></input>
          <p className="text-white font-bold font-xl text-center">Password:</p>
          <input className="w-7/12 p-4 my-4 rounded mx-auto" placeholder="Password" type="password"></input>
          <input className="w-5/12 mt-6 bg-gradient-to-r from-red-400 to-pink-700 hover:cursor-pointer active:translate-x-1 active:translate-y-0.5 mx-auto rounded p-2"type="submit"/>
        </form>
      </div>
      <div className="text-center text-xs text-teal-100">
        <p className="">Use:</p>  
        <p className="font-bold">User - UserPassword</p>
        <p> for default login</p>
      </div>
    </main>
  );
};

export default Index;
