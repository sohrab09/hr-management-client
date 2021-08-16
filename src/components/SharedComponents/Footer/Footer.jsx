import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer bg-white relative pt-1 border-b-2">
                <div class="container mx-auto px-6">
                    <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                        <div class="sm:w-2/3 text-center py-6">
                            <p className="text-blue-400 font-bold mb-2">&copy; {new Date().getFullYear()} SOHR@B</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;