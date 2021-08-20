import React from 'react';
import { useState } from 'react';
import Axios from "axios";

const SingleEmployee = () => {

    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [email, setEmail] = useState(" ");

    const handleSubmit = () => {
        if (email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            Axios.post("http://localhost:5000/api/insert", {
                firstName: firstName,
                lastName: lastName,
                email: email,
            }).then((res) => {
                if (res.data.success) {
                    alert(res.data.message)
                }
                else alert(res.data.message);
            });
        } else {
            alert("email is invalid")
        }

    };

    return (
        <div className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <h1 className="text-center text-4xl text-green-400 font-bold font-serif">Add Single Employee</h1>
                    <form className="w-full flex items-center flex-col mt-5 md:mt-10">
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black"
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            required
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                        <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            required
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                        <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <br />
                        <button className="w-4/6 mt-5 bg-black rounded-lg py-2 text-white text-lg font-bold submitBtn" onClick={handleSubmit}> SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleEmployee;