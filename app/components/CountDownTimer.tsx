// /app/components/CountdownTimer.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-02-20T00:00:00Z').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / 1000 / 60) % 60);
        let seconds = Math.floor((difference / 1000) % 60);
    
        return {
          days: padZero(days),
          hours: padZero(hours),
          minutes: padZero(minutes),
          seconds: padZero(seconds),
        };
      };

      const padZero = (num: number): string => {
        return num < 10 ? `0${num}` : `${num}`;
      };
    
      const [timeLeft, setTimeLeft] = useState<{
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
      }>(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });

    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <h1 className='text-3xl lg:text-5xl'>{`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}</h1>
            <div className='flex flex-row gap-x-4 my-4 underline text-base lg:text-xl'>
                <Link href="/schedule">schedule</Link>
                <Link href="/music">music</Link>
            </div>
        </div>
    );
};

export default CountdownTimer;
