import React from 'react';
import Image from 'next/image';
import loadging from '../../public/loading.svg';

const Account = () => {
    return (
        <div className='container lg:mx-auto flex items-center justify-center w-full min-h-body' >
            <div className=" p-5 flex items-center justify-center w-fit ">
                    <Image className=" animate-spin " src={loadging} alt="loading" width={30} /> <span className="p-5 text-lg font-bold text-btn_add-800 " >Loading...</span> 
            </div>
        </div>
    );
};

export default Account;