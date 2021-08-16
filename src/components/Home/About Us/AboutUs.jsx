import React from 'react';
import "./AboutUs.css";
import aboutProfile from "../../Images/aboutProfile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
    return (
        <section id="about" className="mt-10 bg-gray-100">
            <h1 className="text-center text-6xl text-indigo-400 font-bold font-serif">About Me</h1>
            <div className="mt-10 bg-gray-200 flex justify-center">
                <div className="w-11/12 grid md:grid-cols-3 mt-10">
                    <div className="hidden sm:block aboutMe md:col-start-1 md:col-end-3 h-72 2xl:h-96 rounded-lg md:rounded-none">

                    </div>
                    <div className="mb-10 sm:mt-5 md:mt-0 bg-white md:ml-3 rounded-lg  h-72 2xl:h-96">
                        <div className="px-5 md:px-0 py-5 text-gray-500 md:ml-4 flex flex-col items-center text-center md:items-start md:text-left h-72 2xl:h-96 justify-around">
                            <div className="md:flex items-center">
                                <img className="rounded-full w-20" src={aboutProfile} alt="" />
                                <p className="mt-3 md:mt-0 md:ml-4 text-lg font-medium text-indigo-400">Mohammad Sohrab Hossain</p>
                            </div>
                            <p className="md:pr-10 text-green-500 text-justify mt-3 mb-3">A passionate programmer. I am a Full Stack Web Developer with React.js, Express.js, Node.js, and MongoDb as my tech stack. In 2021, I successfully completed my Engineering with specialization in 'Computer Science and Engineering'.</p>
                            <a className="font-bold text-indigo-400" href="https://www.facebook.com/himel.mahmud.007/" target="/_blank">Connect  <FontAwesomeIcon icon={faLongArrowAltRight} /> <FontAwesomeIcon icon={faFacebookF} /></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutUs;