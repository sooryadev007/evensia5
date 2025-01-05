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
  const [guidelinesAccepted, setGuidelinesAccepted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFFCF3] text-xl font-kalam-light">
      <Navbar className="font-young-serif text-lg" />

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
            className="text-2xl sm:text-3xl md:text-4xl text-[#F3E1B3] mb-8 px-4 font-light"
          >
            Tech Meets Romance
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
                  className="mt-4 sm:mt-8 bg-[#7D1806] hover:bg-[#7D1806]/90 text-[#F3E1B3] text-2xl sm:text-3xl md:text-4xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 rounded-lg shadow-lg transform transition hover:scale-105 w-full sm:w-auto min-w-[200px]"
                >
                  Register Now
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#1F1D17] border-[#F3E1B3]/20 w-[95%] sm:w-[90%] max-h-[90vh] sm:max-w-2xl mx-auto overflow-hidden flex flex-col">
                <DialogHeader className="space-y-3 sm:space-y-4 p-6 sm:p-8">
                  <DialogTitle className="text-3xl sm:text-4xl font-bold text-[#F3E1B3] text-center">
                    Registration Guidelines
                  </DialogTitle>
                </DialogHeader>
                <div className="overflow-y-auto flex-1 px-6 sm:px-8">
                  <DialogDescription className="text-[#F3E1B3]/80 text-xl sm:text-2xl pb-6">
                    <div className="space-y-4">
                      <p className="font-semibold text-[#F3E1B3]">Guidelines for Registration:</p>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Click on the &apos;Individual registration&apos; or &apos;Couple registration&apos; options below accordingly</li>
                        <li>Fill the Forms correctly (Details will be used for certificates and recordation)</li>
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
                          <li>Delegates can find their own accommodation or can be provided by the event committee.</li>
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
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      id="guidelines-checkbox"
                      checked={guidelinesAccepted}
                      onChange={(e) => setGuidelinesAccepted(e.target.checked)}
                      className="w-4 h-4 rounded border-[#F3E1B3]/50 bg-transparent checked:bg-[#7D1806] checked:border-transparent focus:ring-[#7D1806] focus:ring-offset-0"
                    />
                    <label htmlFor="guidelines-checkbox" className="text-[#F3E1B3]/80 text-sm sm:text-base">
                      I have read the guidelines and would abide by it
                    </label>
                  </div>
                  <motion.div
                    className="flex flex-col gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button
                      size="lg"
                      className="bg-[#7D1806] hover:bg-[#7D1806]/90 text-[#F3E1B3] text-sm sm:text-base py-4 sm:py-6 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => window.open("https://evensia.neetoform.com/91820973ab4066bb4356", "_blank")}
                      disabled={!guidelinesAccepted}
                    >
                      Individual Registration
                    </Button>
                    <Button
                      size="lg"
                      className="bg-[#7D1806] hover:bg-[#7D1806]/90 text-[#F3E1B3] text-sm sm:text-base py-4 sm:py-6 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => window.open("https://evensia.neetoform.com/00621e89f062a17ab33e", "_blank")}
                      disabled={!guidelinesAccepted}
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
            className="text-5xl sm:text-6xl font-young-serif text-[#F3E1B3] mb-8 sm:mb-12 text-center"
          >
            About Evensia
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:gap-8"
          >
            <Card className="p-8 sm:p-10 shadow-lg bg-[#1F1D17] border-[#F3E1B3]/20">
              <h3 className="text-4xl sm:text-5xl font-young-serif text-[#F3E1B3] mb-6 sm:mb-8">
                A Legacy of Excellence
              </h3>
              <div className="space-y-8 text-[#F3E1B3] font-prompt">
                <p className="text-lg sm:text-xl leading-relaxed font-prompt">
                  Evensia is an intercollegiate event that was the inauguration of IEEE CS Chapter of CE Munnar in 2016. The second, third and fourth editions of Evensia were two-day technical symposiums held in November 2017, October 2019 and January 2022 respectively.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed font-prompt">
                  The four previous editions saw a great participation from students across the state. Evensia is a combination of technology culture and humanity, each edition of Evensia has promised this to all the participants. This event has always been a part of the sweetest memories in the mind of all participants.
                </p>
              </div>
            </Card>

            <Card className="p-8 sm:p-10 shadow-lg bg-[#1F1D17] border-[#F3E1B3]/20">
              <h3 className="text-4xl sm:text-5xl font-young-serif text-[#F3E1B3] mb-6 sm:mb-8">
                Event Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#F3E1B3]" />
                    <span className="text-lg sm:text-xl text-[#F3E1B3]">January 25-26th, 2025</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-5">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#F3E1B3]" />
                    <span className="text-lg sm:text-xl text-[#F3E1B3]">Full Day Event</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-5">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#F3E1B3]" />
                    <span className="text-lg sm:text-xl text-[#F3E1B3]">CE Munnar Campus</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-5">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#F3E1B3]" />
                    <span className="text-lg sm:text-xl text-[#F3E1B3]">Open to All Engineering Students</span>
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6 text-[#F3E1B3] font-prompt">
                  <p className="text-lg sm:text-xl leading-relaxed font-prompt">
                    EVENSIA 5 continues the legacy of excellence while bringing fresh innovations and opportunities for participants. Join us for a day filled with technical workshops, competitions, and networking opportunities.
                  </p>
                  <p className="text-lg sm:text-xl leading-relaxed font-prompt">
                    Experience the perfect blend of technology, culture, and humanity that has made Evensia a memorable event for participants throughout its history.
                  </p>
                </div>
              </div>
            </Card>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-[#F3E1B3] mb-6 sm:mb-8 text-center mt-12"
            >
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12">
              {/* Trekking Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden group">
                  <div className="relative h-80 sm:h-96 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <Image
                      src="/15.jpg"
                      alt="Trekking"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                    <h3 className="absolute top-4 left-6 text-2xl font-bold font-young-serif text-[#F3E1B3] transform group-hover:scale-105 transition-transform">
                      Trekking
                    </h3>
                  </div>
                  <p className="text-[#F3E1B3] leading-relaxed font-prompt">
                    Experience the breathtaking beauty of Munnar through guided treks, exploring its scenic landscapes and natural wonders.
                  </p>
                </Card>
              </motion.div>

              {/* Campfire Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden group">
                  <div className="relative h-80 sm:h-96 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <Image
                      src="/campfire.jpg"
                      alt="Campfire"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                    <h3 className="absolute top-4 left-6 text-2xl font-bold font-young-serif text-[#F3E1B3] transform group-hover:scale-105 transition-transform">
                      Campfire
                    </h3>
                  </div>
                  <p className="text-[#F3E1B3] leading-relaxed font-prompt">
                    Gather around the warmth of a campfire, share stories, and create lasting memories under the starlit sky.
                  </p>
                </Card>
              </motion.div>

              {/* Sky Lantern Night Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden group">
                  <div className="relative h-80 sm:h-96 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <Image
                      src="/stock.jpg"
                      alt="Sky Lantern Night"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                    <h3 className="absolute top-4 left-6 text-2xl font-bold font-young-serif text-[#F3E1B3] transform group-hover:scale-105 transition-transform">
                      Sky Lantern Night
                    </h3>
                  </div>
                  <p className="text-[#F3E1B3] leading-relaxed font-prompt">
                    Light up the night sky with beautiful lanterns, making wishes and creating a magical atmosphere together.
                  </p>
                </Card>
              </motion.div>

              {/* Cultural Night Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden group">
                  <div className="relative h-80 sm:h-96 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <Image
                      src="/14.jpg"
                      alt="Cultural Night"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                    <h3 className="absolute top-4 left-6 text-2xl font-bold font-young-serif text-[#F3E1B3] transform group-hover:scale-105 transition-transform">
                      Cultural Night
                    </h3>
                  </div>
                  <p className="text-[#F3E1B3] leading-relaxed font-prompt">
                    Immerse yourself in a vibrant celebration of arts, music, and dance showcasing diverse cultural performances.
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshops and Speakers Section */}
      <section
        id="workshops"
        className="py-12 sm:py-20 px-4 bg-[#1F1D17]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Speakers Section */}
          <motion.div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-young-serif text-[#F3E1B3] mb-8 sm:mb-12 text-center"
            >
              Speakers
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Speaker 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 sm:p-8 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                  <div className="relative h-64 -mx-6 -mt-6 mb-6 bg-gray-800 flex items-center justify-center">
                    <span className="text-[#F3E1B3]/50 text-xl font-prompt">TBA</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E1B3] font-prompt">To Be Announced</h3>
                    <p className="text-xl sm:text-2xl text-[#F3E1B3]/80 font-prompt">Coming Soon</p>
                  </div>
                </Card>
              </motion.div>

              {/* Speaker 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6 sm:p-8 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                  <div className="relative h-64 -mx-6 -mt-6 mb-6 bg-gray-800 flex items-center justify-center">
                    <span className="text-[#F3E1B3]/50 text-xl font-prompt">TBA</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E1B3] font-prompt">To Be Announced</h3>
                    <p className="text-xl sm:text-2xl text-[#F3E1B3]/80 font-prompt">Coming Soon</p>
                  </div>
                </Card>
              </motion.div>

              {/* Speaker 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="p-6 sm:p-8 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                  <div className="relative h-64 -mx-6 -mt-6 mb-6 bg-gray-800 flex items-center justify-center">
                    <span className="text-[#F3E1B3]/50 text-xl font-prompt">TBA</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E1B3] font-prompt">To Be Announced</h3>
                    <p className="text-xl sm:text-2xl text-[#F3E1B3]/80 font-prompt">Coming Soon</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Workshops Section */}
          <motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-young-serif text-[#F3E1B3] mb-8 sm:mb-12 text-center"
            >
              Workshops
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Photography Workshop Card - Replacing TBA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                  <div className="relative h-64 sm:h-72 -mx-6 -mt-6 mb-6">
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      <span className="text-[#F3E1B3]/50 text-sm">Image Coming Soon</span>
                    </div>
                    <div className="absolute inset-0 bg-black/50" />
                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold font-young-serif text-[#F3E1B3]">
                      Photography Workshop
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#F3E1B3] leading-relaxed text-lg sm:text-xl font-prompt">
                      The Photography Workshop at EVENSIA 5.0 offers a chance to enhance your photography skills, from mastering composition and lighting to creative storytelling and editing techniques.
                    </p>
                    <div className="space-y-2">
                      <p className="text-[#F3E1B3] text-lg sm:text-xl font-prompt">The workshop will be led by <span className="font-bold">Sebinster Francis</span>, a highly experienced photographer, content creator, and social media influencer. His expertise includes:</p>
                      <ul className="space-y-2 text-[#F3E1B3] text-lg sm:text-xl font-prompt">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                          <span>Photographer, Content Creator, and Social Media Influencer</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                          <span>Influencer at Sony</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                          <span>Featured on BBC Earth and Nat Geo India</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                          <span>Recipient of the Kerala State Film Award in 2021</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-[#F3E1B3] leading-relaxed text-lg sm:text-xl font-prompt">
                      Don't miss this opportunity to capture stunning images like a pro!
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* VR Workshop Card - Replacing AI/ML Workshop Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
                  <div className="relative h-64 sm:h-72 -mx-6 -mt-6 mb-6">
                    <Image
                      src="/vr.jpg"
                      alt="VR Workshop"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold font-young-serif text-[#F3E1B3]">
                      AR/VR Workshop
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#F3E1B3] leading-relaxed text-lg sm:text-xl font-prompt">
                      The AR/VR Workshop at EVENSIA 5.0 offers an exciting opportunity to explore immersive technologies transforming industries like gaming, healthcare, and education.
                    </p>
                    <p className="text-[#F3E1B3] leading-relaxed text-lg sm:text-xl font-prompt">
                      Participants will gain hands-on experience in designing AR/VR applications, creating interactive augmented content, and building virtual environments using industry-relevant tools and frameworks.
                    </p>
                    <div className="space-y-2">
                      <p className="text-[#F3E1B3] text-lg sm:text-xl font-prompt">The session will be led by:</p>
                      <ul className="space-y-2 text-[#F3E1B3] text-lg sm:text-xl font-prompt">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                          <span><span className="font-bold">Mathews Kuriakose</span>, Software Developer</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                          <span><span className="font-bold">Mrudul Shaji</span>, Software Developer</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F3E1B3]" />
                          <span><span className="font-bold">Vishnu Prathap</span>, Implementation Engineer, 6D Technologies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
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
            className="text-5xl sm:text-6xl font-young-serif text-[#F3E1B3] mb-8 sm:mb-12 text-center"
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="relative flex-none w-[90vw] sm:w-[400px] h-[250px] sm:h-[300px] rounded-xl overflow-hidden snap-center"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: (index + 14) * 0.1,
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
            className="text-5xl sm:text-6xl font-young-serif text-[#F3E1B3] mb-8 sm:mb-12 text-center"
          >
            Location
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg overflow-hidden">
              <div className="flex justify-center">
                <div className="hidden md:block w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.118661185144!2d77.06764407562513!3d10.08936229002064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079bd800513727%3A0x857b2268ee00e2cc!2sCollege%20of%20Engineering%20Munnar%20(CEM)!5e0!3m2!1sen!2sin!4v1734962343154!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
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
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-6 text-[#F3E1B3]">
                <h3 className="text-xl font-prompt mb-2">College of Engineering Munnar</h3>
                <p className="text-[#F3E1B3]/80 text-base sm:text-lg font-prompt">
                  College of Engineering Munnar
                  Near Govt. High School, Munnar P.O
                  
                  Idukki, Kerala - 685612
                </p>
              </div>
            </Card>
          </motion.div>
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
            className="text-5xl sm:text-6xl font-young-serif text-[#F3E1B3] mb-8 sm:mb-12 text-center"
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ContactCard
              name="Adarsh K B"
              role="Organizing Chair, Evensia 5"
              phone="9496185897"
              className="text-base sm:text-lg"
            />
            <ContactCard
              name="Ardra Shaji"
              role="Chair, IEEE SB CE Munnar"
              phone="7306921927"
              className="text-base sm:text-lg"
            />
            <ContactCard
              name="Dan V Prabha"
              role="Publicity Outreach Coordinator"
              phone="8078126241"
              className="text-base sm:text-lg"
            />
            <ContactCard
              name="Abhishek Suresh M K"
              role="Registration and Volunteer Coordinator"
              phone="9496452970"
              className="text-base sm:text-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}