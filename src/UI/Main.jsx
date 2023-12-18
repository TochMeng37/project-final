import React from 'react'
import { CiCircleMore } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import Center from './Center';
export const Main = () => {
  return (
    <>
     <div className=" w-full back h-screen flex m-2 justify-around items-center p-20 fixed">
        <div className="w-[20%] h-full  rounded-xl cursor-pointer">
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
            <div className="h-[43%] w-full p-4 rounded-xl mt-5 filter">
                <div className="w-full flex justify-between items-center h-auto">
                    <h1 className='font text-2xl  text-white font-bold'>Gammimg</h1>
                </div>
                <div className="w-full p-2 flex justify-betweenh h-[30%] mt-8 rounded-xl ">
                  <div className="w-[30%] h-full  rounded-2xl "><img className='w-full h-full object-contain rounded-xl' src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg" alt="gammimg" /></div>
                  <div className="w-[60%] ">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className=' text-xl text-white font-semibold '>Super Mario</h1>
                            <p className=' text-white font-medium text-sm'>270k Follow</p>
                        </div>
                        <div className=""><button className="btn btn-neutral bg-blue-700">Following</button></div>
                    </div>
                    <div className="mt-14 text-white flex justify-between">
                         <h1>Super Mario</h1>
                         <div className="flex items-center gap-2">
                         <FaEye/>
                         <h1> 1.6k Watching</h1>
                         </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 flex justify-betweenh h-[30%] mt-8 rounded-xl ">
                  <div className="w-[30%] h-full  rounded-2xl "><img className='w-full h-full object-contain rounded-xl' src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg" alt="gammimg" /></div>
                  <div className="w-[60%] ">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className=' text-xl text-white font-semibold '>Super Mario</h1>
                            <p className=' text-white font-medium text-sm'>270k Follow</p>
                        </div>
                        <div className=""><button className="btn btn-neutral bg-blue-700">Following</button></div>
                    </div>
                    <div className="mt-14 text-white flex justify-between">
                         <h1>Super Mario</h1>
                         <div className="flex items-center gap-2">
                         <FaEye/>
                         <h1> 1.6k Watching</h1>
                         </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-5 w-full flex items-center text-white">
                    <FaArrowCircleDown  className='text-2xl'/>
                    <h1 className='font text-2xl ml-3 font-bold'> see more</h1>
                </div>
            </div>
        </div>
        <div className="w-[54%] h-full bg-black rounded-md">
            <Center/>
        </div>
        <div className="w-[20%] h-full  rounded-md filter">
            <div className=" text-white w-full flex justify-end gap-5 mt-2 p-3">
                <div className=" h-11 bg-slate-300 rounded-full p-2">
                  <IoMdSettings size={28} className=' text-black'/>
                </div>
                <div className="h-11 bg-slate-300 rounded-full p-2">
                  <AiOutlineMessage size={28} className=' text-black'/>
                </div>
                <div className="h-11 bg-slate-300 rounded-full p-2">
                  <IoIosNotificationsOutline size={28} className=' text-black'/>
                </div>
                <div className="h-11 w-[10%] bg-slate-300 rounded-full">
                  <img className='object-cover h-full w-full rounded-full'  src="https://variety.com/wp-content/uploads/2023/03/John-Wick-3.jpg?w=1000&h=562&crop=1&resize=910%2C511" alt="profile" />
                </div>
            </div>
            <div className="w-full h-[15%] bg-black mt-10 p-3 rounded-md">
                <div className="w-full h-full filter  rounded-lg p-2">
                  <h1 className='text-white text-2xl font font-bold'>Your Pages</h1>
                    <div className="w-full h-auto mt-5 ml-3 flex">
                        <div className="flex w-full">
                            <div className="w-[18%] h-16 bg-black rounded-full flex items-center justify-center"><img className='w-full h-full rounded-full object-cover' src="https://variety.com/wp-content/uploads/2023/03/John-Wick-3.jpg?w=1000&h=562&crop=1&resize=910%2C511" alt="page" /></div>
                            <div className=" ml-3 flex w-full justify-between pr-8">
                                <div className="">
                                    <h1 className=' font-bold text-white'>THE MENG</h1>
                                    <h1 className='text-sm text-white'>mengghengg34@gmail.com</h1>
                                </div>
                                <div className="h-11 bg-slate-300 rounded-full p-2">
                                     <IoIosNotificationsOutline size={28} className=' text-black'/>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto pb-10 bg-black p-3  mt-10">
                <div className="w-full h-full filter rounded-lg p-2">
                  <h1 className='text-white text-2xl font font-bold'>Birthdays</h1>
                  <div className=" w-full h-[12vh] rounded-md bg-black">
                    <img className='w-full h-full object-cover rounded-md' src="https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/310663701_532094575594075_5523766487187015225_n.png?_nc_cat=102&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeEcTVH1YrvGoBXXLb-6BnvuEMED6fqUmroQwQPp-pSauh6Ldwl3GJkpPFq6O3vxzb6iqJLAKueXBFKJ5JO4sq-n&_nc_ohc=svFdN44sUDIAX97WgTV&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=00_AfCc7_5vm7Mi8nEAL7Eosl7mkInv9h8piFVXmJA1reVOUw&oe=65842A71" alt="birthday" />
                  </div>
                  <div className=""></div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
export default Main;