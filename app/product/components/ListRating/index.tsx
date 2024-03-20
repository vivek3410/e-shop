import { AvatarComp, Heading } from '@/app/components';
import { Rating } from '@mui/material';
import moment from 'moment';
import React from 'react';

interface ListRatingProps {
    product: any,
}

export default function ListRating({ product }: ListRatingProps) {
    return (
        <div className='flex flex-col gap-4'>
            <Heading title='Product Reviews' />
            <div className='text-sm mt-2'>
                {product.reviews && product.reviews.map((review: any, index: number) => (
                    <div key={index} className='max-w-[300px]'>
                        <div className='flex gap-2 items-center '>
                            <AvatarComp src={review.user.image} name={review.user.name} />
                            <div className='font-semibold'>{review?.user.name}</div>
                            <div className='font-light'>{moment(review.createdDate).fromNow()}</div>
                        </div>
                        <div>
                            <Rating value={review.rating} readOnly />
                            <div className='ml-2'>{review.comment}</div>
                            <hr className='my-4' />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
