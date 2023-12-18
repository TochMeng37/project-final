import React from 'react'
import { CiCircleMore } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
export const Main = () => {
  return (
    <>
     <div className=" w-full back h-screen flex m-2 justify-around items-center p-20 fixed">
        <div className="w-[20%] h-full  rounded-xl">
            <div className="h-[47%] w-full filter shadow-xl p-4 rounded-xl ">
                <div className="w-full flex justify-between items-center h-auto">
                    <h1 className='font text-2xl  font-bold text-white'>Facebook</h1>
                    <CiCircleMore className='text-2xl  text-white'/>
                </div>
                <div className=" mt-10 w-full flex items-center ">
                    <FaUserFriends className='text-2xl text-white'/>
                    <h1 className='font text-2xl ml-3 font-bold text-white'>Friends</h1>
                </div>
                <div className=" mt-10 w-full flex items-center ">
                    <CiShop  className='text-2xl text-white'/>
                    <h1 className='font text-2xl ml-3 font-bold text-white'>Marketplace</h1>
                </div>
                <div className=" mt-10 w-full flex items-center ">
                    <GrGroup  className='text-2xl text-white'/>
                    <h1 className='font text-2xl ml-3 font-bold text-white'>Groups</h1>
                </div>
                <div className=" mt-10 w-full flex items-center ">
                    <FaRegPlayCircle className='text-2xl text-white'/>
                    <h1 className='font text-2xl ml-3 font-bold text-white'>Watch</h1>
                </div>
                <div className=" mt-10 w-full flex items-center ">
                    <FaArrowCircleDown  className='text-2xl text-white'/>
                    <h1 className='font text-2xl ml-3 font-bold text-white'>see more</h1>
                </div>
            </div>
            {/* Gamming */}
            <div className="h-[43%] w-full bg-slate-300 p-4 rounded-xl mt-5">
                <div className="w-full flex justify-between items-center h-auto">
                    <h1 className='font text-2xl  font-bold'>Gammimg</h1>
                </div>
                <div className="w-full p-2 bg-slate-600  flex justify-betweenh h-[30%] mt-8 rounded-xl">
                  <div className="w-[40%] h-full  rounded-2xl bg-black"><img className='w-full h-full object-contain rounded-xl' src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg" alt="gammimg" /></div>
                  <div className="w-[60%] bg-black">  <h1>i</h1></div>
                </div>
              
                <div className="w-full bg-slate-600 h-[30%] mt-8 rounded-xl"> <h1>hi</h1></div>
                <div className=" mt-5 w-full flex items-center">
                    <FaArrowCircleDown  className='text-2xl'/>
                    <h1 className='font text-2xl ml-3 font-bold'>see more</h1>
                </div>
            </div>
        </div>
        <div className="w-[54%] h-full bg-black rounded-md">
            <h1>hji</h1>
        </div>
        <div className="w-[20%] h-full bg-black rounded-md">
            <h1>hji</h1>
        </div>
     </div>
    </>
  )
}
export default Main;