import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content mt-12 mb-4">
                <div>
                    <img className='w-24 h-24' src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1652267371~exp=1652267971~hmac=cc625a69abc047382581465b6aa4a80b6cb48892c2329ee34fd456d1bb5f8545&w=740" alt="" />
                    <p>Ahmed Rifat<br/> Portfolio on developing process</p>
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