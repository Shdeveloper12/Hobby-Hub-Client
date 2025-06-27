import React from 'react';
import img1 from '../../src/assets/error2.jpg';
import { Helmet } from 'react-helmet';



const Error = () => {
    return (
        <>
            <Helmet>
                <title>Error - HobbyHub</title>
                <meta name="description" content="An error occurred on HobbyHub" />
            </Helmet>
            <div className='flex justify-center'>
                <img src={img1} alt='error' />

            </div>
        </>
    );
};

export default Error;