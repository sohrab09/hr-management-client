import React from 'react';

const AdminHome = () => {

    return (
        <div className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <h1 className="text-center text-4xl text-green-400 font-bold font-serif">Welcome to HR Management Admin Panel</h1>
                </div>
            </div>
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-200 flex flex-col items-center justify-evenly">
                    <p className="text-center text-base text-black font-serif">
                    <span className="text-center text-2xl text-red-600 font-bold font-serif m-2">N:B:</span>
                     Please double reload on 
                     <span className="text-center text-lg text-blue-600 font-bold font-serif m-2">Employee List</span>page, here is a technical fault for<span className="text-center text-lg text-blue-600 font-bold font-serif p-2 ">JQUERY Data Table CDN.</span></p>
                </div>
            </div>
            
        </div>
    );
};

export default AdminHome;