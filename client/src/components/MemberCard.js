import React from 'react';

export default function MemberCard({ member }) {
  return (
    <div className='p-6 w-[17rem] group shadow shadow-gray-400'>
      <img src={member.photo} alt="" className='w-56 h-44 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-lg' />
      <p id='member-name' className='inline-flex pt-5 text-sm'>{member.name}</p>
      <p className='py-2 text-gray-600'>{member.role}</p>
      <p className='text-gray-600 leading-5'>{member.description}</p>
    </div>
  )
}
