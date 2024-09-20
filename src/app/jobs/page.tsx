'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TinderCard from 'react-tinder-card';
import JobCard from '~/components/JobCard';

// Define the Job type
interface Job {
  id: string;
  title: string;
  location: { display_name: string };
  description: string;
  redirect_url: string;
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]); // Jobs from API
  const [randomJob, setRandomJob] = useState<Job | undefined>(undefined); // Randomly selected job
  const [lastDirection, setLastDirection] = useState<string | null>(null);
  const [swipedJobs, setSwipedJobs] = useState<Job[]>([]); // Track swiped jobs

  // Replace with your Adzuna API credentials
  const APP_ID = 'f12b032f';
  const APP_KEY = '6cd22e5515fcac9f76841fe1186b8f16';

  // Fetch jobs from Adzuna API
  const fetchJobs = async () => {
    try {
      const response = await axios.get<{ results: Job[] }>(
        `https://api.adzuna.com/v1/api/jobs/gb/search/2`,
        {
          params: {
            app_id: APP_ID,
            app_key: APP_KEY,
            results_per_page: 20,
            what: 'software', // Fetch jobs related to software
            where: 'London',  // You can change location
          },
        }
      );
      setJobs(response.data.results); // Store the fetched jobs in state
      // Select a random job initially
      setRandomJob(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  // Fetch jobs when the component mounts
  useEffect(() => {
    void fetchJobs();
  }, []);

  // Handle the swipe event and select a new job
  const swiped = async (direction: string, jobToDelete: Job) => {
    console.log('removing: ' + jobToDelete.title);
    setLastDirection(direction);

    // If the swipe is to the left, save the job
    if (direction === 'left') {
      try {
        await axios.post('/api/saveJob', jobToDelete); // Replace with your API endpoint
        console.log('Job saved:', jobToDelete);
      } catch (err) {
        console.error('Error saving job:', err);
      }
    }

    // Update swipedJobs and select a new random job in one step
    setSwipedJobs(prevSwipedJobs => {
      const newSwipedJobs = [...prevSwipedJobs, jobToDelete];
      const availableJobs = jobs.filter(
        (job) => !newSwipedJobs.some((swipedJob) => swipedJob.id === job.id)
      );

      if (availableJobs.length > 0) {
        const newJob = availableJobs[Math.floor(Math.random() * availableJobs.length)];
        setRandomJob(newJob);
      } else {
        console.log('No more jobs to display');
        setRandomJob(undefined); // No jobs left
      }

      return newSwipedJobs;
    });
  };

  return (
    <div className='w-screen flex justify-center'>
      {randomJob ? (
        <div className='w-[400px]'>
          <TinderCard onSwipe={(dir) => swiped(dir, randomJob)}
      preventSwipe={['up', 'down']}>
            <JobCard job={randomJob} />
          </TinderCard>
          {lastDirection ? (
            <h2>You swiped {lastDirection}</h2>
          ) : (
            <h2>Swipe a card to get started!</h2>
          )}
        </div>
      ) : (
        <h2>No more jobs available</h2>
      )}
    </div>
  );
}
