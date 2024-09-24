import { getAllCategoryNews } from '@/utils/getCategoryNews';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async ({ searchParams }) => {
    const { data } = await getAllCategoryNews(searchParams.category)
    console.log(data);
    return (
        <div>

            {/* ========semilar in look difrent id data  card ========= */}
            <div className='grid grid-cols-2 gap-4 mt-0 my-5'>
                {
                    data.map((news) => <div key={news._id} className="card bg-base-100 w-full shadow-xl ">
                        <Link href={`/${news.category.toLowerCase()}/${news._id}`} >
                            <figure>
                                <Image className='w-full h-72' src={news.thumbnail_url}
                                    alt="Shoes" width={800} height={600} />
                            </figure>
                            <div className="p-5 space-y-3">
                                <h3 className='text-2xl'>{news.title}</h3>
                                <p className=" bg-red-700 rounded-lg inline-block text-white px-3 py-2">{news.category}</p>
                                <p>by {news.author.name} - {news.author.published_date}</p>
                                <p>{news.details.length > 100 ? news.details.slice(0, 145) + ' ....' : news.details}</p>
                            </div>
                        </Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default DynamicNewsPage;