import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content mt-12 mb-4">
                <div>
                    <img className='w-24 h-24' src="https://brand.house/wp-content/uploads/2021/02/Linkedin.png" alt="" />
                    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </div> 
                <div>
                    <span class="footer-title">Social</span> 
                    <div class="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/ahmed-rifat-5952191a4/"><img className='w-16 h-16' src="https://brand.house/wp-content/uploads/2021/02/Linkedin.png" alt="linkedin" /></a> 

                    <a href="https://github.com/rifatbafsc?tab=repositories"><img className='w-9 h-9 mt-4' src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" /></a>

                    <a href="https://www.facebook.com/bafrifat"><img className='w-9 h-9 mt-4 ml-2' src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" /></a>

                    </div>
                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;