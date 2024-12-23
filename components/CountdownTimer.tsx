"use client";

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2024-01-24T00:00:00+05:30')
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 text-sm font-medium">
      <div className="text-center bg-[#197278] px-4 py-2 rounded-lg">
        <span className="block text-xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className="text-[#f4e2b6]">Days</span>
      </div>
      <div className="text-center bg-[#197278] px-4 py-2 rounded-lg">
        <span className="block text-xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-[#f4e2b6]">Hours</span>
      </div>
      <div className="text-center bg-[#197278] px-4 py-2 rounded-lg">
        <span className="block text-xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-[#f4e2b6]">Mins</span>
      </div>
      <div className="text-center bg-[#197278] px-4 py-2 rounded-lg">
        <span className="block text-xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="text-[#f4e2b6]">Secs</span>
      </div>
    </div>
  )
}