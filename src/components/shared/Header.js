import React from 'react';
import headerImage from "@/assets/logo.png"
import Image from 'next/image';
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate()

    return (
        <div className='py-10 text-center'>
            <Image className='block mx-auto' src={headerImage} height={100} width={500} alt='dragon news' />
            <p className='mt-3'>Journalist Without Fear or Favour</p>
            <p className='mt-3'>{currentDate}</p>

        </div>
    );
};

export default Header;