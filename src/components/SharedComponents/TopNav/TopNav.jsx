import React from 'react';

const TopNav = () => {
    return (
        <div className="hidden sm:hidden md:flex h-10 w-full text-black justify-between items-center px-12">
            <div>
                <a className="ml-5" href="/">Contact With</a>
                <a className="ml-5" href="/">+8801820003222</a>
            </div>
            <div>
                <a href="/">sohrab.cse9@gmail.com</a>
            </div>
        </div>
    );
};

export default TopNav;