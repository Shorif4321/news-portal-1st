import { getSingleNews } from '@/utils/getSingleNews';
import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async ({ params }) => {
    console.log(params.newsId);
    const { data } = await getSingleNews(params.newsId)
    console.log(data);

    return (
        <div className='flex'>
            <div>

            </div>

            <div>
                <div className="card bg-base-100 w-full shadow-xl">

                    <figure>
                        <Image className='w-full h-72' src={data.thumbnail_url}
                            alt="Shoes" width={800} height={600} />
                    </figure>
                    <div className="p-5 space-y-3">
                        <h3 className='text-2xl'>{data.title}</h3>
                        <p className=" bg-red-700 rounded-lg inline-block text-white px-3 py-2">{data.category}</p>
                        <p>by {data.author.name} - {data.author.published_date}</p>
                        <p>{data.details}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;