'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

const targetDate = new Date('2025-01-25T00:00:00+05:30').getTime()

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => value.toString().padStart(2, '0')

  return (
    <Card className="w-full max-w-lg mx-auto bg-[#140803] text-[#e0d0c0] shadow-xl border-[#3c2412]">
      <CardContent className="p-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2 text-[#f0e0d0]">{formatTime(value)}</div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>
        {Object.values(timeLeft).every(value => value === 0) && (
          <p className="text-xl font-bold text-center mt-4 text-[#f0e0d0]">Countdown finished!</p>
        )}
      </CardContent>
    </Card>
  )
}

