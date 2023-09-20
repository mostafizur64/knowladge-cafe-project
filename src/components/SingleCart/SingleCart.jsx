import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './SingleCart.css';

const SingleCart = ({info,setSpentTime,handleBookTitle}) => {

    return (
        <div>
            <div className="card bg-base-100 mt-10">
                <img className='w-[98%] rounded-lg
              '  src={info.blogCoverImage} alt="Shoes" />
                <div className="card-body w-[98%] singleCart">
                    <div className=' flex grid-cols-2 justify-between items-center mt-8'>
                        <div className='flex gap-6'>
                            <img className='rounded-full w-14 h-14' src={info.authorImage} alt="" />
                            <div>
                                <h1 className='text-2xl text-black'>{info.authorName}</h1>
                                <p>{info.publishDate}</p>
                            </div>

                        </div>
                        <div>
                            <p>{info.authorReadTime} <span className='me-1'>min read</span> 
                            <button onClick={()=>handleBookTitle(info.blogTitle,info.id)}><FontAwesomeIcon icon= {faBookmark}/>
                            </button>
                            </p>
                        </div>
                      
                    </div>
                    <h1 className='text-4xl text-zinc-950'>{info.blogTitle}</h1>

                    <div className='flex gap-3 mt-4'>
                        <p>#beginner</p>
                        <p>#programming</p>
                    </div>
                    <div>
                        <button onClick={()=>setSpentTime(prev=>prev+parseInt(info.authorReadTime))} className='underline text-purple-700 mt-5'>Mark as read</button>
                    </div>
                </div>
                <hr className='mt-4' />
            </div>

        </div>
    );
};

export default SingleCart;
