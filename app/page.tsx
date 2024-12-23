"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
        <div className="absolute inset-0">
          <Image
            src="/China.png"
            alt="Background"
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
            Where Technology Meets Innovation
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
            <Button 
              size="lg"
              className="mt-4 sm:mt-8 bg-[#7D1806] hover:bg-[#7D1806]/90 text-[#F3E1B3] text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg shadow-lg transform transition hover:scale-105"
              onClick={() => window.open("https://forms.google.com/evensia5", "_blank")}
            >
              Register Now
            </Button>
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
                    <span className="text-sm sm:text-base text-[#F3E1B3]">January 24th, 2024</span>
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
      <section className="py-12 sm:py-20 px-4 bg-[#1F1D17]">
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
            {/* Workshops Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <Image
                    src="/workshop.jpg"
                    alt="Workshop"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-[#F3E1B3]">
                    Technical Workshops
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-[#F3E1B3] leading-relaxed">
                    Immerse yourself in hands-on learning experiences with our technical workshops. 
                    Gain practical skills and insights from industry experts in:
                  </p>
                  <ul className="space-y-2 text-[#F3E1B3]">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Web Development & Cloud Computing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Artificial Intelligence & Machine Learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>IoT & Embedded Systems</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Speakers Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <Image
                    src="/speakers.jpg"
                    alt="Speakers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-[#F3E1B3]">
                    Expert Speakers
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-[#F3E1B3] leading-relaxed">
                    Learn from distinguished speakers and industry leaders who will share their expertise and insights. 
                    Our speakers bring years of experience in:
                  </p>
                  <ul className="space-y-2 text-[#F3E1B3]">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Technology Innovation & Future Trends</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Career Development in Tech</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                      <span>Industry Best Practices</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>
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
              phone="8590054416"
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