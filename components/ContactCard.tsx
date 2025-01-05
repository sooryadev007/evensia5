"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  className?: string;
}

export default function ContactCard({ name, role, phone, className = "text-base sm:text-lg" }: ContactCardProps) {
  return (
    <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg">
      <div className="space-y-2">
        <h3 className={`font-young-serif text-[#F3E1B3] ${className}`}>{name}</h3>
        <p className={`text-[#F3E1B3]/80 ${className} font-prompt`}>{role}</p>
        <p className={`text-[#F3E1B3]/80 ${className} font-prompt`}>{phone}</p>
      </div>
    </Card>
  );
}