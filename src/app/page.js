import Navbar from '@/components/shared/Navbar';
import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className='flex mt-5'>
        <div className='w-4/6 me-2'>
          <LatestNews></LatestNews>
        </div>

        <div className='w-2/6 ms-2'>
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
};

export default HomePage;