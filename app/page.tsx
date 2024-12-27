"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFFCF3]">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 sm:py-32 overflow-hidden bg-[#1F1D17]"
      >
        {/* Mobile Background (Japan SVG) */}
        <div className="absolute inset-0 block md:hidden">
          <Image
            src="/japan.svg"
            alt="Mobile Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        {/* Desktop Background (China.png) */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/China.png"
            alt="Desktop Background"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Image
              src="/EVENSIA.png"
              alt="Evensia Logo"
              width={300}
              height={100}
              className="w-[200px] sm:w-[300px] h-auto"
              priority
            />
            <Image
              src="/5.0.png"
              alt="5.0"
              width={120}
              height={120}
              className="w-[80px] sm:w-[120px] h-auto"
              priority
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-[#F3E1B3] mb-8 px-4 font-light"
          >
            Where Technology Meets Romance
          </motion.p>
          
          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-8 px-4"
          >
            <CountdownTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="mt-4 sm:mt-8 bg-[#7D1806] hover:bg-[#7D1806]/90 text-[#F3E1B3] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-lg shadow-lg transform transition hover:scale-105 w-full sm:w-auto min-w-[200px]"
                >
                  Register Now
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#1F1D17] border-[#F3E1B3]/20 w-[95%] sm:w-[90%] max-h-[90vh] sm:max-w-2xl mx-auto overflow-hidden flex flex-col">
                <DialogHeader className="space-y-2 sm:space-y-3 p-4 sm:p-6">
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-[#F3E1B3] text-center">
                    Registration Guidelines
                  </DialogTitle>
                </DialogHeader>
                <div className="overflow-y-auto flex-1 px-4 sm:px-6">
                  <DialogDescription className="text-[#F3E1B3]/80 text-sm sm:text-base pb-4">
                    <div className="space-y-4">
                      <p className="font-semibold text-[#F3E1B3]">Guidelines for Registration:</p>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Click on the "register as" options below accordingly</li>
                        <li>Fill the google forms correctly (Details will be used for certificates and recordation)</li>
                        <li>Once filled, you will receive an instant acknowledgment through email</li>
                        <li>Within 24 hours you will receive an email from our side providing you with the amount for the tickets with respect to your combinations and QR/UPI details for payment</li>
                        <li>Do the payment and reply the mail with proof (screen shot) and transaction id as contents</li>
                        <li>Once the verification process is completed your tickets will be confirmed</li>
                      </ul>
                      
                      <div className="mt-6">
                        <p className="font-semibold text-[#F3E1B3] mb-2">NB 1:</p>
                        <ul className="list-disc pl-4 space-y-2">
                          <li>Couple registration will only be valid for 1 male and 1 female</li>
                          <li>For every registration as a pair each ticket cost will be deducted by Rs.100/-</li>
                          <li>Couple registration can be of any combination regardless of IEEE/Non-IEEE/other entry</li>
                          <li>Event schedule will be provided underneath</li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <p className="font-semibold text-[#F3E1B3] mb-2">NB 2: Delegates seeking accommodation facility</p>
                        <ul className="list-disc pl-4 space-y-2">
                          <li>Delegates seeking accommodation facility will be charged with Rs.200/- each (for 1 day only)</li>
                          <li>Accommodation facility for gents and ladies will be provided separately</li>
                          <li>Travel to and from event venue will be provided</li>
                          <li>Any conflicts arising from delegates regarding the accommodative property will not be the responsibility of the organizing committee</li>
                        </ul>
                      </div>
                    </div>
                  </DialogDescription>
                </div>
                <div className="p-4 sm:p-6 border-t border-[#F3E1B3]/20">
                  <motion.div 
                    className="flex flex-col gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button
                      size="lg"
                      className="bg-[#7D1806] hover:bg-[#7D1806]/90 text-[#F3E1B3] text-sm sm:text-base py-4 sm:py-6 h-auto"
                      onClick={() => window.open("https://evensia.neetoform.com/91820973ab4066bb4356", "_blank")}
                    >
                      Individual Registration
                    </Button>
                    <Button
                      size="lg"
                      className="bg-[#7D1806] hover:bg-[#7D1806]/90 text-[#F3E1B3] text-sm sm:text-base py-4 sm:py-6 h-auto"
                      onClick={() => window.open("https://evensia.neetoform.com/00621e89f062a17ab33e", "_blank")}
                    >
                      Couple Registration
                    </Button>
                  </motion.div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-12 sm:py-20 px-4 bg-[#1F1D17]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#F3E1B3] mb-8 sm:mb-12 text-center"
          >
            About Evensia
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:gap-8"
          >
            <Card className="p-4 sm:p-6 shadow-lg bg-[#1F1D17] border-[#F3E1B3]/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#F3E1B3] mb-3 sm:mb-4">A Legacy of Excellence</h3>
              <div className="space-y-4 text-[#F3E1B3]">
                <p className="text-sm sm:text-base leading-relaxed">
                  Evensia is an intercollegiate event that was the inauguration of IEEE CS Chapter of CE Munnar in 2016. The second, third and fourth editions of Evensia were two-day technical symposiums held in November 2017, October 2019 and January 2022 respectively.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  The four previous editions saw a great participation from students across the state. Evensia is a combination of technology culture and humanity, each edition of Evensia has promised this to all the participants. This event has always been a part of the sweetest memories in the mind of all participants.
                </p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 shadow-lg bg-[#1F1D17] border-[#F3E1B3]/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#F3E1B3] mb-3 sm:mb-4">Event Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E1B3]" />
                    <span className="text-sm sm:text-base text-[#F3E1B3]">January 25-26th, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E1B3]" />
                    <span className="text-sm sm:text-base text-[#F3E1B3]">Full Day Event</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E1B3]" />
                    <span className="text-sm sm:text-base text-[#F3E1B3]">CE Munnar Campus</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E1B3]" />
                    <span className="text-sm sm:text-base text-[#F3E1B3]">Open to All Engineering Students</span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 text-[#F3E1B3]">
                  <p className="text-sm sm:text-base leading-relaxed">
                    EVENSIA 5 continues the legacy of excellence while bringing fresh innovations and opportunities for participants. Join us for a day filled with technical workshops, competitions, and networking opportunities.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Experience the perfect blend of technology, culture, and humanity that has made Evensia a memorable event for participants throughout its history.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Workshops and Speakers Section */}
      <section 
        id="workshops"
        className="py-12 sm:py-20 px-4 bg-[#1F1D17]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#F3E1B3] mb-8 sm:mb-12 text-center"
          >
            Workshops & Speakers
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Web Development Workshop Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="text-[#F3E1B3]/50 text-sm">Image Coming Soon</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-[#F3E1B3]">
                    Web Development Workshop
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-[#F3E1B3] leading-relaxed">
                    Master modern web development technologies and best practices through hands-on coding sessions.
                  </p>
                  <ul className="space-y-2 text-[#F3E1B3]">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Frontend Frameworks (React, Next.js)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Backend Development (Node.js)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Database Design & API Development</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* AI/ML Workshop Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="text-[#F3E1B3]/50 text-sm">Image Coming Soon</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-[#F3E1B3]">
                    AI & ML Workshop
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-[#F3E1B3] leading-relaxed">
                    Dive into the world of artificial intelligence and machine learning with practical implementations.
                  </p>
                  <ul className="space-y-2 text-[#F3E1B3]">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Deep Learning Fundamentals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Computer Vision Applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Natural Language Processing</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Industry Expert Speaker Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="text-[#F3E1B3]/50 text-sm">Image Coming Soon</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-[#F3E1B3]">
                    Industry Leaders Panel
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-[#F3E1B3] leading-relaxed">
                    Connect with industry veterans sharing insights on technology trends and career growth.
                  </p>
                  <ul className="space-y-2 text-[#F3E1B3]">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Tech Leadership Insights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Future of Technology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Innovation in Tech Industry</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Academic Speakers Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="text-[#F3E1B3]/50 text-sm">Image Coming Soon</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-[#F3E1B3]">
                    Research & Innovation Talks
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-[#F3E1B3] leading-relaxed">
                    Discover cutting-edge research and innovations from academic experts and researchers.
                  </p>
                  <ul className="space-y-2 text-[#F3E1B3]">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Emerging Technologies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Research Breakthroughs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Academic Perspectives</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Glimpses Section */}
      <section 
        id="glimpses"
        className="py-12 sm:py-20 px-4 bg-[#1F1D17] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#F3E1B3] mb-8 sm:mb-12 text-center"
          >
            Glimpses of Evensia
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className="flex gap-1 sm:gap-2 animate-scroll overflow-x-auto touch-pan-x pb-4 cursor-grab active:cursor-grabbing snap-x snap-mandatory no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
                <motion.div
                  key={index}
                  className="relative flex-none w-[90vw] sm:w-[400px] h-[250px] sm:h-[300px] rounded-xl overflow-hidden snap-center"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Image
                    src={`/${index}.jpg`}
                    alt={`Glimpse ${index}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110 pointer-events-none"
                    priority
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </motion.div>
              ))}
              {/* Duplicate images for infinite scroll effect */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="relative flex-none w-[90vw] sm:w-[400px] h-[250px] sm:h-[300px] rounded-xl overflow-hidden snap-center"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: (index + 13) * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Image
                    src={`/${index}.jpg`}
                    alt={`Glimpse ${index}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110 pointer-events-none"
                    priority
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-20 px-4 bg-[#130504]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#F3E1B3] mb-8 sm:mb-12 text-center"
          >
            Location
          </motion.h2>
          <div className="flex justify-center">
            <div className="hidden md:block w-full max-w-4xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.118661185144!2d77.06764407562513!3d10.08936229002064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079bd800513727%3A0x857b2268ee00e2cc!2sCollege%20of%20Engineering%20Munnar%20(CEM)!5e0!3m2!1sen!2sin!4v1734962343154!5m2!1sen!2sin" 
                width="100%" 
                height="600" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="md:hidden w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.118661185144!2d77.06764407562513!3d10.08936229002064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079bd800513727%3A0x857b2268ee00e2cc!2sCollege%20of%20Engineering%20Munnar%20(CEM)!5e0!3m2!1sen!2sin!4v1734962343154!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        className="py-12 sm:py-20 px-4 bg-[#1F1D17]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#F3E1B3] mb-8 sm:mb-12 text-center"
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ContactCard
              name="Adarsh K B"
              role="Organizing Chair, Evensia 5"
              phone="9496185897"
            />
            <ContactCard
              name="Ardra Shaji"
              role="Chair, IEEE SB CE Munnar"
              phone="7306921927"
            />
            <ContactCard
              name="Dan V Prabha"
              role="Publicity Outreach Coordinator"
              phone="8078126241"
            />
            <ContactCard
              name="Abhishek Suresh M K"
              role="Sponsorship and Finance Coordinator"
              phone="9496452970"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}