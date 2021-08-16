import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className="headerSection">
            <div className="headerCover flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">HR <span className="fontColor">Management</span></h1>
                    <p className="text-2xl mt-5 mb-8 subTitle">“In most cases, being a good boss means hiring talented people and then getting out of their way”</p>
                </div>
            </div>
        </section>
    );
};

export default Header;