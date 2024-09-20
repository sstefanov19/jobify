import Link from 'next/link';
import React from 'react';

interface Job {
    title: string;
    location: { display_name: string };
    description: string;
    redirect_url: string;
  }

interface JobCardProps {
  job: Job;
}
const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
      <div className='md:h-[500px] md:w-[400px] h-[500px] w-[300px] flex flex-col justify-between items-center border shadow-lg rounded-xl mt-16 p-6 bg-slate-400'>
        <div className='w-full'>
          <h2 className='text-2xl font-bold mb-2 text-black text-center'>{job.title}</h2>
          <p className='text-gray-600 mb-4 text-center border-b-2'>{job.location.display_name}</p>
          <p className='text-gray-800 mb-6'>{job.description}</p>
        </div>
        <Link
          className='h-[40px] w-[120px] bg-blue-500 mt-6 hover:bg-blue-600 text-white font-semibold rounded-full flex items-center justify-center transition duration-300'
          href={job.redirect_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Apply Now
        </Link>
      </div>
    );
  };


export default JobCard;
