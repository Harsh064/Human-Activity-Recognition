import React from 'react';

export default function ApplicationCard({ application }) {
  return (
    <div className='p-5 rounded-lg border border-gray-300'>
      <img src={application.icon} alt="" className='w-10' />
      <h3 className='py-2 font-semibold text-2xl'>{application.title}</h3>
      <p className='text-sm text-gray-500'>{application.description}</p>
    </div>
  )
}
