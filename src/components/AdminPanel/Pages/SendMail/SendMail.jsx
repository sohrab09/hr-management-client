import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

const SendMail = () => {


    function sendEmail(e) {
        init("user_eb5YZ0AkpQNVa0I5okrQ5");
        e.preventDefault();

        emailjs.sendForm(
            'service_gtchehr',
            'template_orp54ii',
            e.target,
            'user_eb5YZ0AkpQNVa0I5okrQ5'
        ).then(res => {
            alert("Mail send successfully")
            console.log(res);
        }).catch(err => console.log(err));
    }


    return (
        <section className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <h1 className="text-center text-4xl text-green-300 font-bold font-serif">Send Email</h1>
                    <form className="w-full flex items-center flex-col mt-5 md:mt-10" onSubmit={sendEmail}>
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-2 border-green-200"
                            type="email"
                            placeholder="User Email Address"
                            name="user_email"
                            required
                        />
                        <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-2 border-green-200"
                            type="text"
                            placeholder="Email Subject"
                            name="subject"
                            required
                        />
                        <br />
                        <textarea
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-2 border-green-200"
                            name="message"
                            placeholder="Email Body"
                            rows="5"
                            required
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