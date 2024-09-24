import CategoryList from '@/components/ui/CategoryList';
import React from 'react';

const CategoriesLayout = ({ children }) => {
    return (
        <div className='flex mt-5'>
            <div className='w-1/4 me-2 '>
                <div className='bg-slate-200'>
                    <CategoryList></CategoryList>
                </div>
            </div>
            <div className='w-3/4 ms-2'>
                {children}
            </div>

        </div>
    );
};

export default CategoriesLayout;