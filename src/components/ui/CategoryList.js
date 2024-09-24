import { getAllCategories } from '@/utils/getAllCategories';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories()
    // console.log(allCategories);


    return (
        <div className='p-4'>
            <h1 className='text-2xl '>Categories</h1>

            <div className="divider mt-0"></div>
            {
                allCategories.map((category) => <Link href={`/categories/news?category=${category.title.toLowerCase()}`} key={category._id}>
                    <button className="btn btn-wide btn-outline my-2">{category?.title}</button>
                </Link>)
            }
        </div>
    );
};

export default CategoryList;