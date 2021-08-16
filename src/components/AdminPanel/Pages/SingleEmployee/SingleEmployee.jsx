import React from 'react';

const SingleEmployee = () => {
    return (
        <div className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <h1 className="text-center text-4xl text-blue-400 font-bold font-serif">Add Single Employee</h1>
                    <form className="w-full flex items-center flex-col mt-5 md:mt-10">
                        <input
                        className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" 
                        type="text"
                        placeholder="First Name"
                        required=""
                        /> 
                        <br />
                        <input 
                        className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" 
                        type="text"
                        placeholder="Last Name"
                        required=""
                        />
                        <br />
                        <input 
                        className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" 
                        type="text" 
                        placeholder="Email Address"
                        required=""
                        /> 
                        <br />
                        <input className="w-4/6 mt-5 bg-black rounded-lg py-2 text-white text-lg font-bold submitBtn" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleEmployee;