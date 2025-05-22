import React from 'react';
import img1 from '../../src/assets/images.png';

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
                        <p className='secondary text-md'>A hobby is an activity pursued in one's leisure  <br /> time for enjoyment. It's something you do for fun,  <br /> not for money, and typically do fairly regularly. <br /> Hobbies can range from collecting items to <br /> creative pursuits, playing sports, or other amusements</p>

                    </div>
                    <div>
                        <nav>
                            <h6 className="footer-title primary text-md">Social</h6>
                            <div className="grid grid-flow-col gap-4 mt-8">

                                <span className='text-4xl'><i class="fa-brands fa-square-facebook"></i></span><span className='text-4xl'><i class="fa-brands fa-x-twitter"></i></span><span className='text-4xl'><i class="fa-brands fa-youtube"></i></span><span className='text-4xl'><i class="fa-brands fa-square-instagram"></i></span>
                            </div>

                        </nav>
                    </div>
                    <nav className=''>
                        <h6 className="footer-title bt-5">Legal</h6>
                        <a className="link link-hover secondary ">Terms of use</a>
                        <br />
                        <a className="link link-hover secondary mt-5">Privacy policy</a>
                        <br />
                        <a className="link link-hover secondary">Cookie policy</a>
                    </nav>
                </div>






            </footer>

        </>

    );
};

export default Footer;