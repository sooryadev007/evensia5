"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
}

export default function ContactCard({ name, role, phone }: ContactCardProps) {
  return (
    <Card className="p-8 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg">
      <div className="space-y-4">
        <h3 className="text-3xl sm:text-4xl font-semibold text-[#F3E1B3]">{name}</h3>
        <p className="text-2xl sm:text-3xl text-[#F3E1B3]/80">{role}</p>
        <div className="flex items-center gap-3">
          <Phone className="w-8 h-8 text-[#F3E1B3]" />
          <a href={`tel:${phone}`} className="text-2xl sm:text-3xl text-[#F3E1B3]/80 hover:text-[#F3E1B3]">{phone}</a>
        </div>
      </div>
    </Card>
  );
}