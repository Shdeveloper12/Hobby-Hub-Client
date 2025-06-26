import React from 'react';
import img1 from '../../src/assets/images.png';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-green-400  p-10 ">
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-50 mx-auto'>
                    <div>
                        <div className='flex gap-2'>
                            <img className='w-10' src={img1} alt="" />
                            <h1 className='text-3xl font-bold text-blue-700 third'>HobbyHub</h1>

                        </div>
                        <br />
                        <p className='secondary text-md'>A hobby is an activity pursued in one's leisure time for enjoyment. It's something you do for fun,   not for money, and typically do fairly regularly. Hobbies can range from collecting items to  creative pursuits, playing sports, or other amusements</p>

                    </div>
                    <div>
                        <nav>
                            <h6 className="footer-title primary text-md">Social</h6>
                            <div className="grid grid-flow-col gap-4 mt-8">

                                <span className='text-4xl'><a href="https://www.facebook.com" target='_blank'><i  class="fa-brands fa-square-facebook"></i></a></span><span className='text-4xl'><a href="https://twitter.com" target='_blank'><i class="fa-brands fa-x-twitter"></i></a></span><span className='text-4xl'><a href="https://www.youtube.com" target='_blank'><i class="fa-brands fa-youtube"></i></a></span><span className='text-4xl'><a href="https://www.instagram.com" target='_blank'><i class="fa-brands fa-square-instagram"></i></a></span>
                            </div>

                        </nav>
                    </div>
                    <nav className=''>
                        <h6 className="footer-title bt-5">Legal</h6>
                        <Link className="link link-hover secondary " to="/terms">Terms of use</Link>
                        <br />
                        <Link className="link link-hover secondary mt-5" to="/privacy">Privacy policy</Link>
                        <br />
                        <Link className="link link-hover secondary" to="/cookies">Cookie policy</Link>
                    </nav>
                </div>






            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by SH Developer Ltd</p>
                </aside>
            </footer>

        </>

    );
};

export default Footer;