import React from 'react';

const SendMail = () => {

    return (
        <section className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <h1 className="text-center text-4xl text-green-300 font-bold font-serif">Send Email</h1>
                    <form className="w-full flex items-center flex-col mt-5 md:mt-10">
                        <input
                        className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-2 border-green-200" 
                        type="text"
                        placeholder="Email Subject"
                        required=""
                        /> 
                        <br />
                        <textarea className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-2 border-green-200"  
                        name=""
                        placeholder="Email Body"
                        rows="5"
                        >
                        </textarea>
                        <br />
                        <button className="w-4/6 mt-5 bg-black rounded-lg py-2 text-white text-lg font-bold submitBtn">SEND MAIL</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SendMail;