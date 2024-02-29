"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CountdownTimerProps {
  targetDate?: string;
  isHero?: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate = "",
  isHero,
}) => {
  const calculateTimeLeft = () => {
    const targetDateInMillis = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = targetDateInMillis - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let dayDec = (difference / (1000 * 60 * 60 * 24)).toFixed(6);

    return {
      days: padZero(days),
      hours: padZero(hours),
      minutes: padZero(minutes),
      seconds: padZero(seconds),
      dayDec: dayDec,
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
    dayDec: string;
  }>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    dayDec: "00",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center text-center text-white">
      {isHero ? (
        <h1 className="text-3xl lg:text-5xl">Good luck for the exams!</h1>
      ) : (
        <h1 className="text-sm lg:text-xl">{`${timeLeft.dayDec}`}</h1>
      )}

      <h1 className={isHero ? "text-sm lg:text-2xl" : "hidden"}>
        <span className="animate-pulse">grind</span>{" "}
        <span className="line-through">or get grinded</span>
      </h1>
      <div
        className={
          isHero
            ? "flex flex-row gap-x-4 my-4 underline text-base lg:text-xl"
            : "hidden"
        }
      >
        <Link href="/schedule">schedule</Link>
        <Link href="https://open.spotify.com/genre/0JQ5IMCbQBLrJ8yYHGwaev">
          music
        </Link>
      </div>
    </div>
  );
};

export default CountdownTimer;
