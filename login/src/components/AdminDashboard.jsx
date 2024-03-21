import React from "react";
import Navbar from "./Navbar";
// import Sidebar from "./UserSidebar";
import AdminSidebar from "./AdminSidebar";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar name={"Dashboard"}></Navbar>
      <div className="flex">
        <div className="w-2/12 bg-[#1d2634]  mr-3 flex flex-col justify-center items-center">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="w-full bg-[#1d2634] myhieght ">
          <div className="h-8 bg-[#666c76] flex divide-x divide-slate-200"> 
            <div className=" h-full pl-1 w-1/4 flex  items-center ">
              Users
            </div>
            <div className=" h-full flex w-1/4  items-center ">
              Balance
            </div>
            <div className=" h-full flex w-1/4  items-center">
              Date Joined
            </div>
            <div className=" h-full pr-10 flex w-1/4  items-center ">
              Action
            </div>
          </div>
          <div className="h-8 bg-[#9ba3b3] flex text-black divide-x divide-slate-200"> 
            <div className=" h-full pl-1 w-1/4 flex  items-center ">
              Atul
            </div>
            <div className=" h-full flex w-1/4  items-center ">
              0.0
            </div>
            <div className=" h-full flex w-1/4  items-center">
              21/03/2024
            </div>
            <div className=" h-full pr-10 flex w-1/4  items-center ">

          <button className="bg-red-500   h-6  w-14 rounded-xl text-black text-center">Delete</button>
            </div>
          </div>
          <div className="h-8 bg-[#9ba3b3] flex text-black divide-x divide-slate-200"> 
            <div className=" h-full pl-1 w-1/4 flex  items-center ">
              Shubham
            </div>
            <div className=" h-full flex w-1/4  items-center ">
              0.0
            </div>
            <div className=" h-full flex w-1/4  items-center">
              21/03/2024
            </div>
            <div className=" h-full pr-10 flex w-1/4  items-center ">

          <button className="bg-red-500   h-6  w-14 rounded-xl text-black text-center">Delete</button>
            </div>
          </div>
          <div className="h-8 bg-[#9ba3b3] flex text-black divide-x divide-slate-200"> 
            <div className=" h-full pl-1 w-1/4 flex  items-center ">
              Priyanshu
            </div>
            <div className=" h-full flex w-1/4  items-center ">
              0.0
            </div>
            <div className=" h-full flex w-1/4  items-center">
              21/03/2024
            </div>
            <div className=" h-full pr-10 flex w-1/4  items-center ">

          <button className="bg-red-500   h-6  w-14 rounded-xl text-black text-center">Delete</button>
            </div>
          </div>
          
          {/* <div className="h-8 bg-[#666c76] flex justify-between">
            <div className=" h-full pl-1 flex justify-center items-center ">
              Atul 
            </div>
            <div className=" h-full flex justify-center items-center ">
              0.0
            </div>
            <div className=" h-full flex justify-center items-center">
              21/03/2024
            </div>
            <div className=" h-full pr-10 flex justify-center items-center ">
            </div>
          </div>
 */}

        </div>
      </div>
    </>
  );
}

export default Home;
