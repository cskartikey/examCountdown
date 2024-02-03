"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-02-20T00:00:00Z").getTime();
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
  }>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    });

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-3xl lg:text-5xl">{`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}</h1>
      <h1 className="text-sm lg:text-2xl">
        <span className="animate-pulse">grind</span>{" "}
        <span className="line-through">or get grinded</span>
      </h1>
      <div className="flex flex-row gap-x-4 my-4 underline text-base lg:text-xl">
        <Link href="/schedule">schedule</Link>
        <Link href="https://open.spotify.com/genre/0JQ5IMCbQBLrJ8yYHGwaev">
          music
        </Link>
      </div>
    </div>
  );
};

export default CountdownTimer;
