import { getAllNews } from '@/utils/getAllNews';
import Image from 'next/image';
import React from 'react';
import sidebarImage from '@/assets/editorsInsight3.png'


const Sidebar = async () => {
    const { data } = await getAllNews()

    return (
        <div>
            {/* ======== sidebar first card ========= */}
            <div className="card bg-base-100 w-full shadow-xl">
                <figure>
                    <Image className='w-full h-72' src={data[15].thumbnail_url}
                        alt="Shoes" width={800} height={800} />
                </figure>
                <div className="p-4 space-y-2">
                    <p className=" bg-red-700 rounded-lg inline-block text-white px-4 py-2">{data[0].category}</p>
                    <h3 className='text-xl '>{data[15].title}</h3>
                    <p>by {data[0].author.name} - {data[15].author.published_date}</p>

                </div>
            </div>

            {/* ========== similar in look difrent in data ========= */}
            {
                data.slice(5, 13).map((news) => <div key={news._id} className="card bg-base-100 w-full shadow-xl my-4">
                    <div className="p-3 space-y-2 flex ">
                        <Image className='rounded-lg h-24 w-24' src={news.thumbnail_url}
                            alt="Shoes" width={200} height={200} />

                        <div className='ps-3'>
                            <h3 className='text-xl'>{news.title}</h3>
                            <p>by {news.author.name} - {news.author.published_date}</p>
                        </div>
                    </div>
                </div>)
            }

            <div>
                <Image className='w-full h-96 rounded-lg' src={sidebarImage}
                    alt="Shoes" width={800} height={800} />
            </div>



        </div>
    );
};

export default Sidebar;